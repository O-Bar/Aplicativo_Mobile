import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private auth: AngularFireAuth) { }

  ngOnInit() {
  }

  public async login(){
      const result = await this.auth.signInWithPopup(
        new firebase.auth.GoogleAuthProvider()
      )
      console.log(result)

  }

}
