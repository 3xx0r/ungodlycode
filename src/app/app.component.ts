import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { NavController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { SdpopPage } from '../pages/sdpop/sdpop';
import { AlertController } from 'ionic-angular';


import { HomePage } from '../pages/home/home';
import { MapPage } from '../pages/map/map';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = MapPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public alertCtrl: AlertController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  presentPrompt() {
    let alert = this.alertCtrl.create({
      title: 'Set Distance',
      inputs: [
        {
          name: 'Model #',
          placeholder: 'Connection Name'
        },
        {
          name: 'Pin',
          placeholder: 'Bracelet #',
          type: 'password'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {   
          text: 'Connect',
          handler: data => {
            console.log("you dung did it you goof");
            }
          }
      ]

    });
    alert.present();
  }
  

}

