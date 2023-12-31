import { Injectable, inject } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  authState,
} from '@angular/fire/auth';
import { CookieService } from 'ngx-cookie-service';
import { Route, Router } from '@angular/router';
export interface Credential {
  email: string;
  password: string;
}
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  //method email and password
  private auth: Auth = inject(Auth);

  private cookies = inject(CookieService);
  private router = inject(Router);
  token: string;

  readonly authState$ = authState(this.auth);
  loginWithEmailAndPassword(credential: Credential) {
    signInWithEmailAndPassword(
      this.auth,
      credential.email,
      credential.password
    ).then((response) => {
      this.auth.currentUser?.getIdToken().then((token) => {
        this.token = token;
        console.log(this.token);
        this.cookies.set('token', this.token);
        this.router.navigate(['/']);
      });
      console.log(response);
    });
  }
  getIdToken() {
    return this.cookies.get('token');
  }

  isLogin() {
    return this.cookies.get('token');
  }
  logOut() {
    this.auth.signOut().then(() => {
      this.token = '';
      this.cookies.set('token', this.token);
      this.router.navigate(['/']);
      window.location.reload();
    });
  }
}
