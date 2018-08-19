import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import {AuthService} from '../auth/auth.service';
import {AuthGuard} from '../auth/auth-guard.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean = false;

  constructor(private authService: AuthService, public authGuard: AuthGuard) { }

  ngOnInit() {

    // firebase.auth().onAuthStateChanged( userData => {
    //   // we are logged in
    //   if (userData && userData.emailVerified ) {
    //     this.isLoggedIn = true;
    //   } else {
    //     this.isLoggedIn = false;
    //   }
    // });

    // console.log('authChange!!!', this.authService.authChangeCheckFirebase());



    // if(this.authService.authChangeCheckFirebase() === null) {
    //   this.isLoggedIn = false;
    // } else {
    //   this.isLoggedIn = true;
    // }

  }



  logout() {
    this.authService.logout();
    this.isLoggedIn = false;
  }



}
