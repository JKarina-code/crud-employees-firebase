import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs';
import { LoginService } from '../service/login.service';

export const routerI = () => inject(Router);
export const authStateObs$ = () => inject(LoginService).authState$;

//Guard
export const authGuard: CanActivateFn = () => {
  const router = routerI();
  return authStateObs$().pipe(
    map((user) => {
      if (!user) {
        router.navigateByUrl('/login');
        return false;
      }
      return true;
    })
  );
};
