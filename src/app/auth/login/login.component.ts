import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {NotificationService} from '../../shared/notification.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private notifier: NotificationService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.authService.loginWithUserPassword(form.value.email, form.value.password)
      .then( userData => {

        if (userData && userData.user.emailVerified) {
          this.notifier.display('success', 'Login erfolgreich');

          setTimeout(() => {
            // https://stackoverflow.com/questions/45025334/how-to-use-router-navigatebyurl-and-router-navigate-in-angular
            this.router.navigateByUrl('');  // geht zur Homepage!
            // this.router.navigate(['/login']);
          }, 2000);
        } else {
          this.notifier.display('error', 'Loginfehler: Sie müssen zuerst die Email Adresse verifizieren');
        }

      })
      .catch( err => {
        console.log('error bs: ' + err);
        this.notifier.display('error', err.message);
      });
  }

}
