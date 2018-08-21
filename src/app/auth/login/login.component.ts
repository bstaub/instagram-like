import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.authService.loginWithUserPassword(form.value.email, form.value.password)
      .then( (res) => {
         console.log('Login Email/Password Erfrolgreich');
         console.log(res);
         // https://stackoverflow.com/questions/45025334/how-to-use-router-navigatebyurl-and-router-navigate-in-angular
         this.router.navigateByUrl('');  // geht zur Homepage!
      })
      .catch( (err) => console.log('error bs: ' + err));
  }

}
