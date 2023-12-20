import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AddEmployeeComponent } from './pages/add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './pages/update-employee/update-employee.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { EmployeesListComponent } from './pages/list-employees/list-employees.component';
const routes: Routes = [
    { path: '', component: EmployeesListComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'addEmployee', component: AddEmployeeComponent },
    { path: 'updateEmployee', component: UpdateEmployeeComponent },
    { path: 'updateEmployee/:id', component: UpdateEmployeeComponent },
    { path: '**', component: ErrorPageComponent },
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
