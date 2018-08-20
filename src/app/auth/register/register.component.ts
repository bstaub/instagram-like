import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    // const fullname = form.value.fullname;
    // this.authService.createUserInFirebaseAuthList(form.value.email, form.value.password);
    this.authService.createUserInFirebaseAuthListEmailVerified(form.value.email, form.value.password);
  }

}
