import { Component, OnInit } from '@angular/core';
import { Enquiry } from '../shared/enquiry.model';
import {EnquiryService}  from '../shared/enquiry.service';
import { NgForm } from '@angular/forms';
declare var M: any;

@Component({
  selector: 'app-enquiry-form',
  templateUrl: './enquiry-form.component.html',
  styleUrls: ['./enquiry-form.component.css']
})
export class EnquiryFormComponent implements OnInit {

  constructor( private enquiryServices: EnquiryService) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
   console.log("submit clicked")
    if (form.value._id == "") {
      this.enquiryServices.postEnquiry(form.value).subscribe((res) => {
        console.log("send value is" + JSON.stringify(this.enquiryServices.postEnquiry(form.value)));
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
    // else {
    //   this.enquiryServices.(form.value).subscribe((res) => {
    //     M.toast({ html: 'Updated successfully', classes: 'rounded' });
    //   });
    // }
  }

}
