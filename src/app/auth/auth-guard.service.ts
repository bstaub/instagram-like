import {AuthService} from './auth.service';
import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
              private authService: AuthService) {
  }

  canActivate() {
    if (this.authService.isLoggedIn()) {

      console.log('in authGuard: logged in!');
      return true;

    } else {
      console.log('in authGuard: not logged in');
      return false;
    }

    // this.router.navigate(['/']);
    // return false;
  }
}
