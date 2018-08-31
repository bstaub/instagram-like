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

  constructor(private authService: AuthService, private FireStoreuser: UserService) { }

  user;
  singleUserInFirestore;

  ngOnInit() {
    this.user = this.authService.getUserProfile();
    this.getUser();
  }


  getUser() {
    console.log('test1');
    console.log(this.user.uid);
    // debugger;

    this.singleUserInFirestore = this.FireStoreuser.getSingleUserinFireStore(this.user.uid);
    console.log(this.singleUserInFirestore);


  }


}
