import { Component, inject } from '@angular/core';
import { LoginService } from '../../core/service/login.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  private loginService = inject(LoginService);

  isLogin() {
    return this.loginService.isLogin();
  }

  logOut() {
    this.loginService.logOut();
  }
}
