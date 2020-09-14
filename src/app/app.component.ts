import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(){
    var firebaseConfig = {
      apiKey: "AIzaSyCXbnSq-0gbC8Lq6Yl8_cPY9jvVbRj3Nbs",
      authDomain: "bookdeva-cd23c.firebaseapp.com",
      databaseURL: "https://bookdeva-cd23c.firebaseio.com",
      projectId: "bookdeva-cd23c",
      storageBucket: "bookdeva-cd23c.appspot.com",
      messagingSenderId: "538453868876",
      appId: "1:538453868876:web:0f32789f290f9bfd4a0fe9",
      measurementId: "G-QQM9Y224NR"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
