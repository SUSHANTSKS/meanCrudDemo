import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Enquiry } from './enquiry.model';

@Injectable()
export class EnquiryService {

  selectedEmployee: Enquiry;
  enquiryDetails: Enquiry[];
  readonly baseURL = 'http://localhost:3000/enquiryDetails';

  constructor(private http: HttpClient) { }

  postEnquiry(enq: Enquiry) {
    return this.http.post(this.baseURL, enq);
  }

  // getEnquiryList() {
  //   return this.http.get(this.baseURL);
  // }

  // putEmployee(emp: Employee) {
  //   return this.http.put(this.baseURL + `/${emp._id}`, emp);
  // }

  // deleteEmployee(_id: string) {
  //   return this.http.delete(this.baseURL + `/${_id}`);
  // }

}
