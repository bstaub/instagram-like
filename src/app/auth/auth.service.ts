import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable} from 'rxjs';


@Injectable()
export class AuthService {
  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  constructor(private _firebaseAuth: AngularFireAuth, private router: Router) {

    this.user = _firebaseAuth.authState;

    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
          console.log(this.userDetails);
        } else {
          this.userDetails = null;
        }
      }
    );
  }

  loginWithUserPassword(email, password) {
    console.log('vor auth.EmailAuthProvider.credential->' + email + ' / ' + password );
    const credential = firebase.auth.EmailAuthProvider.credential( email, password );
    return this._firebaseAuth.auth.signInWithEmailAndPassword(email, password);
  }

  signInWithGoogle() {
    console.log('google login');
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
  }

  createUserInFirebaseAuthList(email, password) {
    console.log('vor createUserInFirebaseAuthList->' + email + ' / ' + password );
    this._firebaseAuth.auth.createUserWithEmailAndPassword(email, password)
      .then( userData => {
        console.log(userData);
      })
      .catch(function(error) {
        console.log(error);
    });
  }

  createUserInFirebaseAuthListEmailVerified(email, password) {
    console.log('vor createUserInFirebaseAuthList->' + email + ' / ' + password );

    // https://stackoverflow.com/questions/44940897/property-auth-does-not-exist-on-type-angularfiremodule
    // https://stackoverflow.com/questions/49847189/sendsigninlinktoemail-sending-invalid-url
    // https://firebase.google.com/docs/auth/web/email-link-auth
    const actionCodeSettings = {
        url: 'http://localhost:4200/login',
        // This must be true.
        handleCodeInApp: true
    };

    this._firebaseAuth.auth.sendSignInLinkToEmail(email, actionCodeSettings);

    this._firebaseAuth.auth.createUserWithEmailAndPassword(email, password)
      .then( userData => {
        console.log(userData);
      })
      .catch(function(error) {
        console.log(error);
      });
  }


  isLoggedIn() {
    if (this.userDetails == null ) {
      return false;
    } else {
      return true;
    }
  }

  authChangeCheckFirebase() {

    // firebase.auth().onAuthStateChanged( userData => {
    //   // we are logged in
    //   if (userData && userData.emailVerified ) {
    //     this.isLoggedIn = true;
    //   } else {
    //     this.isLoggedIn = false;
    //   }
    // });
    this._firebaseAuth.auth.onAuthStateChanged( userData => {
      // we are logged in
      if (userData) {
        console.log('authChange Success!! User is signed in');
        console.log(userData);
        return true;
      } else {
        console.log('authChange Error!! User is signed out');
        console.log(userData);
        return false;
      }
    });

  }

  getUserProfile() {
    return this.userDetails;
  }



  logout() {
    this._firebaseAuth.auth.signOut()
      .then((res) => this.router.navigate(['login']));
  }
}
