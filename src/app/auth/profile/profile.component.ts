import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import UserCredential = firebase.auth.UserCredential;
import {UserService} from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private authService: AuthService, private userService: UserService) { }

  user;
  singleUserInFirestore;
  localStorageUser;

  ngOnInit() {
    this.user = this.authService.getUserProfile();
    this.getUser();
  }


  getUser() {
    console.log('test1');
    console.log(this.user.uid);
    // debugger;

    this.localStorageUser = this.userService.getProfileFromLocalStorage();

    this.singleUserInFirestore = this.userService.getSingleUserinFireStore(this.user.uid);
    console.log('testing singleUserInFirestore: ', this.singleUserInFirestore);


  }


}
