import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import * as moment from 'moment';
import { DistrictdetailsService } from '../districtdetails.service';
import { district, session, stateDetails, state } from '../session';

@Component({
  selector: 'app-chennaidistrict',
  templateUrl: './chennaidistrict.component.html',
  styleUrls: ['./chennaidistrict.component.css']
})


export class ChennaidistrictComponent implements OnInit {
  public states: any = [];
  public districts: any = [];
  public centers: any = [];
  public availabityDetails: any=[];
  constructor(private details: DistrictdetailsService,
              private fgroup: FormBuilder) { }

  //  -------- formgroup Modal---------///
  infoform = this.fgroup.group({
    stateName: [''],
    districtName: [''],
  });
  ngOnInit(): void {

    setTimeout(
      function(){ 
      location.reload(); 
      },60000);

    //  ----------------To get the stateid and statename from state API-------------------//     
    this.details.getstateData().subscribe(stateData => {
      this.states = stateData['states'];
      console.log(this.states);
      console.log(stateData);
    }, err => console.error(err));


    //  -----------------To get the distid and distname from district API-------------------//



  }
    getDistricts(val) {
    this.details.getdistrictData(val).subscribe(districtdata => {
      this.districts = districtdata['districts'];
      console.log(this.districts);
    }, err => console.error(err));

  }

  getAvailabityDetails() {
    const districtId = this.infoform.get('districtName').value;
    const today = moment();
    const currDate = today.format('DD-MM-YYYY');
    this.details.getsessionData(districtId, currDate).subscribe(sessiondata => {
      this.centers = sessiondata['centers'];
      this.availabityDetails=this.centers;
      console.log(this.centers);
    }
    , err => console.error(err));
  }

     sortByAge(val)
     {
     this.availabityDetails=this.centers.filter(sessionData=>sessionData.sessions.every(age=>age.min_age_limit===(val)));  
       console.log(this.availabityDetails);
     }
     sortBySlotsAvailable()
     {
       this.availabityDetails=this.centers.filter(item=>item.sessions.every(slots=>slots.available_capacity!=0));
     }
     sortByPrice(val)
     {
       this.availabityDetails=this.centers.filter(item=>item.fee_type===(val));
       console.log(this.availabityDetails);
     }
}