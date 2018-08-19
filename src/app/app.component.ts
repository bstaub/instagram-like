import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'instagram-like';

  ngOnInit() {


    // const config = {
    //   apiKey: 'AIzaSyDBZxtUJ6EvqqVNEblSPDaPZi8YwXWiYFY',
    //   authDomain: 'instagram-bs.firebaseapp.com',
    //   databaseURL: 'https://instagram-bs.firebaseio.com',
    //   projectId: 'instagram-bs',
    //   storageBucket: 'instagram-bs.appspot.com',
    //   messagingSenderId: '632234073491'
    // };
    // firebase.initializeApp(config);



  }


}
