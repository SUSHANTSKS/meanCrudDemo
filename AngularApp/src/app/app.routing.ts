import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { EnquiryFormComponent } from './enquiry-form/enquiry-form.component';

const routes: Routes = [
  {path: '', redirectTo: 'Home', pathMatch: 'full'}, 
  { path: 'Home', component: EmployeeComponent },
  { path: 'Enquiry', component: EnquiryFormComponent },

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
