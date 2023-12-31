import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { CardEmplyComponent } from './pages/list-employees/card-emply/card-emply.component';
import { CharacteristicsComponent } from './pages/list-employees/characteristics/characteristics.component';
import { EmployeesService } from './core/service/employees.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './app.routing.module';
import { EmployeesListComponent } from './pages/list-employees/list-employees.component';
//Firebase
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { environment } from '../environment/environment';
import { CookieService } from 'ngx-cookie-service';


@NgModule({
  declarations: [
    AppComponent,
    EmployeesListComponent,
    CardEmplyComponent,
    CharacteristicsComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
  ],
  providers: [EmployeesService, CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
