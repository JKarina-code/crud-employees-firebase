import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { CardEmplyComponent } from './pages/list-employees/card-emply/card-emply.component';
import { CharacteristicsComponent } from './pages/list-employees/characteristics/characteristics.component';
import { EmployeesService } from './service/employees.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './app.routing.module';
import { EmployeesListComponent } from './pages/list-employees/list-employees.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesListComponent,
    CardEmplyComponent,
    CharacteristicsComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [EmployeesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
