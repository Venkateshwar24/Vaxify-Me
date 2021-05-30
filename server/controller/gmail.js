const express = require('express');
const https = require('https');
const axios = require('axios');
const moment = require('moment');
const nodemailer = require('nodemailer');


function gmail() {
  let slotFound;
  let centerDetails = [];
  let Details = [];
  let centers = [];
  const today = moment();
  const currDate = today.format('DD-MM-YYYY');

  // polling function Definition

  async function polling() {

    const response = await axios.get('http://localhost:3000/users');
    for (let data of response.data) {
      
      await fetchSlots(data.pincode, data.emailid);
    }

  }
  setInterval(polling, 30000);
  
  
  // fetchSlots function for fetching data for the required pincode

  async function fetchSlots(pincodeValue, emailval) {
    console.log(pincodeValue);
    await https.get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pincodeValue}&date=${currDate}`,
      (resp) => {
        let data = '';

        resp.on('data', (chunk) => {
          data += chunk;
        });
        resp.on('end', async () => {
          await processData(JSON.parse(data), emailval);
        });

      }).on("error", (err) => {
        console.log("Error: " + err.message);
      });


  }

  // To check the availability details using processData function

  async function processData(data, emailval) {
    centers = data.centers;
    let output = ``;
    for (let i = 0; i < centers.length; ++i) {
      const sessions = centers[i].sessions;
      for (let j = 0; j < sessions.length; ++j) {
        if (sessions[j].available_capacity > 0 && sessions[j].min_age_limit===18) {
          slotFound = true;
          output = `<div><h4>Center Name : ${centers[i].name}</h4></div><div><h4>Center Address : ${centers[i].address}</h4></div><div><h4>Age group :${sessions[j].min_age_limit}</h4></div><div><h4>Slots Available : ${sessions[j].available_capacity} </h4></div><div><h4>Slots Available for Dose 1 : ${sessions[j].available_capacity_dose1} </h4></div><div><h4>Slots Available for Dose 2 : ${sessions[j].available_capacity_dose2} </h4></div><div><h4>Date : ${sessions[j].date} </h4></div><div><h4>Vaccine : ${sessions[j].vaccine} </h4></div><hr> `;
          centerDetails.push(output);
        }
      }
    }

    Details = JSON.stringify(centerDetails);
    Details = Details.substring(1, Details.length - 1).replace(/\"/g, "").replace(/,/g,"");

    if (slotFound===true) {
      await sendMail(emailval);
    }
    centers = [];
    centerDetails = [];

  }

  // Sending alert Mail if it there is slot found

  function sendMail(emailidValue) {
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'covidvaxify@gmail.com',
        pass: 'covidvaxify@123'
      }
    });

    var mailOptions = {
      from: 'covidvaxify@gmail.com',
      to: emailidValue,
      subject: 'Vaccine Availability',
      html: Details

    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
    slotFound = false;
    Details.length = 0;
  }

  // Calling the polling function

  polling();
}

module.exports = { gmail };
