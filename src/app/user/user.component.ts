import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { DistrictdetailsService } from '../districtdetails.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private usergroup:FormBuilder,
    private serviceDetails:DistrictdetailsService) { }

  ngOnInit(): void {
    this.resetForm();
  }
  userform=this.usergroup.group({
   
    pincode:[''],
    emailid:['']

  });


  resetForm(form?:NgForm)
  {
    if(form)
    {
      form.reset();
    }
  }

  onSubmit(form:NgForm)
  {
    this.serviceDetails.postUserDetails(form.value).subscribe((res) => {
      alert("USER REGISTERED SUCCESSFULLY");
      this.resetForm(form);
    });
  }
}
