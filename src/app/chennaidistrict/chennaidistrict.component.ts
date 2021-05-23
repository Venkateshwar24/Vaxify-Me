import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import * as moment from 'moment';
import { DistrictdetailsService } from '../districtdetails.service';
import { district, center, state } from '../session';

@Component({
  selector: 'app-chennaidistrict',
  templateUrl: './chennaidistrict.component.html',
  styleUrls: ['./chennaidistrict.component.css']
})


export class ChennaidistrictComponent implements OnInit {
  public states: state[] = [];
  public districts: district[] = [];
  public centers: center[] = [];
  public availabityDetails: center[] = [];
  public aD: center[] = [];
  constructor(private details: DistrictdetailsService,
    private fgroup: FormBuilder) { }

  //  -------- formgroup Modal---------///
  infoform = this.fgroup.group({
    stateName: [''],
    districtName: [''],
  });
  ngOnInit(): void {

    // setTimeout(
    //   function(){ 
    //   location.reload(); 
    //   },60000);

    //  ----------------To get the stateid and statename from state API-------------------//     
    this.details.getstateData().subscribe(stateData => {
      this.states = stateData.states as state[];
      console.log(this.states);
    }, err => console.error(err));


    //  -----------------To get the distid and distname from district API-------------------//



  }
  getDistricts(val) {
    this.details.getdistrictData(val).subscribe(districtdata => {
      this.districts = districtdata.districts as district[];
      console.log(this.districts);
    }, err => console.error(err));

  }

  getAvailabityDetails() {

    const districtId = this.infoform.get('districtName').value;
    const today = moment();
    const currDate = today.format('DD-MM-YYYY');
    this.details.getsessionData(districtId, currDate).subscribe(sessiondata => {
      this.centers = sessiondata.centers as center[];
      this.availabityDetails = this.centers;
      console.log(this.centers);
    }
      , err => console.error(err));
    document.getElementById('filter').style.display = 'contents';
    document.getElementById('mainContainer').style.backgroundColor = '#f5f5f5';
  }

  sortByAge(val) {
    this.availabityDetails = this.centers.map(({ sessions, ...r }) => ({
      ...r,
      sessions: sessions.filter(e => e.min_age_limit === (val))
    }))
      .filter(e => e.sessions.length);
    console.log(this.availabityDetails);
  }
  sortBySlotsAvailable() {
    // this.availabityDetails=this.centers.filter(item=>item.sessions.every(slots=>slots.available_capacity!=0));
    this.availabityDetails = this.centers.map(({ sessions, ...r }) => ({
      ...r,
      sessions: sessions.filter(e => e.available_capacity)
    }))
      .filter(e => e.sessions.length);
    console.log(this.availabityDetails);
  }
  sortByPrice(val) {
    this.availabityDetails = this.centers.filter(item => item.fee_type === (val));
    console.log(this.availabityDetails);
  }
}