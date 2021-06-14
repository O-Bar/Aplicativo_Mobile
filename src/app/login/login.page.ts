import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/app'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private auth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
  }

  public async login(){
      const result = await this.auth.signInWithPopup(
        new firebase.auth.GoogleAuthProvider()
      )
      console.log(result)
        if (result){
          this.router.navigateByUrl('/home/pagina-inicial');
        }
  }

}
