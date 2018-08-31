import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import UserCredential = firebase.auth.UserCredential;
import {UserService} from '../user.service';
import {StorageService} from '../../shared/storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private authService: AuthService, private userService: UserService, private storageService: StorageService) { }

  user;
  singleUserInFirestore;
  localStorageUser;
  imageUrl;

  ngOnInit() {
    this.user = this.authService.getUserProfile();
    this.getUser();
  }


  getUser() {
    console.log('test1');
    console.log(this.user.uid);
    // debugger;

    this.localStorageUser = this.userService.getProfileFromLocalStorage();

    // this.singleUserInFirestore = this.userService.getSingleUserinFireStore(this.user.uid);
    // console.log('testing singleUserInFirestore: ', this.singleUserInFirestore);
  }


  onFileSelection($event) {
    this.storageService.upload($event)
      .then((uploadSnapshot: firebase.storage.UploadTaskSnapshot) => {

        uploadSnapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log(downloadURL);
          this.imageUrl = downloadURL;
        });

    });

  }










}
