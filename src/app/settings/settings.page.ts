import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  color : string = '';
  isUpdated : boolean = false;
  colorScheme : string = "";
  tempColor : string = "";
  constructor(public toastController: ToastController, public loadingController : LoadingController) { }

  ngOnInit() {
    this.colorScheme = localStorage.getItem('color');
  }

  buttonColor(color: string){
    if(this.colorScheme != color){
      this.isUpdated = true;
      this.tempColor = color;
    }else{
      this.isUpdated = false;
    }
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Saving',
      duration: 200
    });
    await loading.present();  
    this.saveColorScheme(); 
    this.presentToast();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your settings has been saved.',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }

  saveColorScheme(){
    localStorage.setItem('color', this.tempColor);
    this.colorScheme = localStorage.getItem('color');
  }

}
