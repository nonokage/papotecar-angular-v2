import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyCfElCyWR0LYibofRgxm4gAjNMi51gJhm0',
      authDomain: 'upload-test-b98bd.firebaseapp.com',
      databaseURL: 'https://upload-test-b98bd.firebaseio.com',
      projectId: 'upload-test-b98bd',
      storageBucket: 'upload-test-b98bd.appspot.com',
      messagingSenderId: '764054709909'
    };
    firebase.initializeApp(config);
  }

}
