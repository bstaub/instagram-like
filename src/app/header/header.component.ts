import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import {AuthService} from '../auth/auth.service';
import {AuthGuard} from '../auth/auth-guard.service';
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean = false;

  constructor(private _firebaseAuth: AngularFireAuth, private authService: AuthService) { }

  ngOnInit() {

    this._firebaseAuth.auth.onAuthStateChanged( userData => {
      // we are logged in
      console.log('ngOnInit0', userData);

      if (userData && userData.emailVerified ) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    });

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
