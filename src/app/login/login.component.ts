import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LoginService, Credential } from '../core/service/login.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
interface LogInForm {
  email: FormControl<string>;
  password: FormControl<string>;
}
@Component({
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  selector: 'app-about',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  private router = inject(Router);
  //FormBuilder
  formBuilder = inject(FormBuilder);
  private loginService = inject(LoginService);

  //form login
  formLogin: FormGroup<LogInForm> = this.formBuilder.group({
    email: this.formBuilder.control('', {
      validators: [Validators.required, Validators.email],
      nonNullable: true,
    }),
    password: this.formBuilder.control('', {
      validators: Validators.required,
      nonNullable: true,
    }),
  });
  ngOnInit(): void {}

  async logIn() {
    if (this.formLogin.invalid) return;
    const credential: Credential = {
      email: this.formLogin.value.email || '',
      password: this.formLogin.value.password || '',
    };

    try {
      await this.loginService.loginWithEmailAndPassword(credential);
      this.router.navigateByUrl('/');
    } catch (error) {
      console.error(error);
    }
  }
}
