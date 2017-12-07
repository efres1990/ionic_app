// login.ts
import { Component } from '@angular/core';
import { NavController, ToastController, LoadingController } from 'ionic-angular';
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
  loading = this.loadingCtrl.create({
    content: 'Please wait...'
  });
  constructor(public loadingCtrl:LoadingController,private navCtrl: NavController, private afAuth: AngularFireAuth, private toastCtrl: ToastController) { }
  login() {
    this.loading.present();
    this.afAuth.auth.signInWithEmailAndPassword(this.loginData.email, this.loginData.password)
      .then(userProfile => {
            this.navCtrl.push(HomePage);   
            this.loading.dismiss();      
      })
      .catch(err => {
        // Handle error
        console.log("holiii"+err.message +"  "+err.code);
        this.presentToast(err.message);
        this.loading.dismiss();      
        
        if((err.code)==="auth/user-not-found"){
        this.signup();
        //this.loading.dismiss();      
      }
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