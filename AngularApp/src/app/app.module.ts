import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EnquiryFormComponent } from './enquiry-form/enquiry-form.component';
import { AppRoutingModule } from './app.routing';
import { EnquiryService } from './shared/enquiry.service';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EnquiryFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [EnquiryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
