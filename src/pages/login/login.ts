// login.ts
import { Component } from '@angular/core';
import {IonicPage, NavController, ToastController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { HomePage } from '../../pages/home/home';
import { AngularFireAuth } from 'angularfire2/auth';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  loginData = {
    email: '',
    password: ''
  }
  constructor(private navCtrl: NavController, private afAuth: AngularFireAuth, private toastCtrl: ToastController) { }
  login() {
    this.afAuth.auth.signInWithEmailAndPassword(this.loginData.email, this.loginData.password)
      .then(userProfile => {
            this.navCtrl.push(HomePage);         
      })
      .catch(err => {
        // Handle error
        console.log("holiii"+err.message +"  "+err.code);
        this.presentToast(err.message);
        
        if((err.code)==="auth/user-not-found")
        this.signup();
      });
  }
  signup() {
    this.navCtrl.push(SignupPage, { email: this.loginData.email });
  }
  presentToast(err) {
    let toast = this.toastCtrl.create({
      message: err,
      duration: 3000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }
}