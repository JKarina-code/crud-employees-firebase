import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AddEmployeeComponent } from './pages/add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './pages/update-employee/update-employee.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { EmployeesListComponent } from './pages/list-employees/list-employees.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './core/guards/auth.guard';
const routes: Routes = [
  { path: '', component: EmployeesListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'addEmployee', component: AddEmployeeComponent },
  { path: 'updateEmployee/:id', component: UpdateEmployeeComponent },
  { path: '**', component: ErrorPageComponent },
  { path: 'contact', component: ContactComponent, canActivate: [authGuard] },
  { path: 'about', component: AboutComponent, canActivate: [authGuard] },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
