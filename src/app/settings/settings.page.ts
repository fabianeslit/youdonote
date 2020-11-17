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
  isPrimary : boolean = false;
  isSecondary : boolean = false;
  isTertiary : boolean = false;
  isSuccess : boolean = false;
  isWarning : boolean = false;
  isDanger : boolean = false;
  isLight : boolean = false;
  isMedium : boolean = false;
  isDark : boolean = false;


  constructor(public toastController: ToastController, public loadingController : LoadingController) { }

  ngOnInit() {
    this.colorScheme = localStorage.getItem('color');
    if(this.colorScheme == 'primary' ){
      this.isPrimary = true;
      this.isSecondary = false;
      this.isTertiary = false;
      this.isSuccess = false;
      this.isWarning = false;
      this.isDanger = false;
      this.isLight = false;
      this.isMedium = false;
      this.isDark = false;
    }else if(this.colorScheme == 'secondary'){
      this.isPrimary = false;
      this.isSecondary = true;
      this.isTertiary = false;
      this.isSuccess = false;
      this.isWarning = false;
      this.isDanger = false;
      this.isLight = false;
      this.isMedium = false;
      this.isDark = false;
    }else if(this.colorScheme == 'tertiary'){
      this.isPrimary = false;
      this.isSecondary = false;
      this.isTertiary = true;
      this.isSuccess = false;
      this.isWarning = false;
      this.isDanger = false;
      this.isLight = false;
      this.isMedium = false;
      this.isDark = false;
    }else if(this.colorScheme == 'success'){
      this.isPrimary = false;
      this.isSecondary = false;
      this.isTertiary = false;
      this.isSuccess = true;
      this.isWarning = false;
      this.isDanger = false;
      this.isLight = false;
      this.isMedium = false;
      this.isDark = false;
    }else if(this.colorScheme == 'warning'){
      this.isPrimary = false;
      this.isSecondary = false;
      this.isTertiary = false;
      this.isSuccess = false;
      this.isWarning = true;
      this.isDanger = false;
      this.isLight = false;
      this.isMedium = false;
      this.isDark = false;
    }else if(this.colorScheme == 'danger'){
      this.isPrimary = false;
      this.isSecondary = false;
      this.isTertiary = false;
      this.isSuccess = false;
      this.isWarning = false;
      this.isDanger = true;
      this.isLight = false;
      this.isMedium = false;
      this.isDark = false;
    }else if(this.colorScheme == 'light'){
      this.isPrimary = false;
      this.isSecondary = false;
      this.isTertiary = false;
      this.isSuccess = false;
      this.isWarning = false;
      this.isDanger = false;
      this.isLight = true;
      this.isMedium = false;
      this.isDark = false;
    }else if(this.colorScheme == 'medium'){
      this.isPrimary = false;
      this.isSecondary = false;
      this.isTertiary = false;
      this.isSuccess = false;
      this.isWarning = false;
      this.isDanger = false;
      this.isLight = false;
      this.isMedium = true;
      this.isDark = false;
    }else if(this.colorScheme == 'dark'){
      this.isPrimary = false;
      this.isSecondary = false;
      this.isTertiary = false;
      this.isSuccess = false;
      this.isWarning = false;
      this.isDanger = false;
      this.isLight = false;
      this.isMedium = false;
      this.isDark = true;
    }else{
      this.isPrimary = false;
      this.isSecondary = false;
      this.isTertiary = false;
      this.isSuccess = false;
      this.isWarning = false;
      this.isDanger = false;
      this.isLight = false;
      this.isMedium = false;
      this.isDark = false;
    }
  }

  buttonColor(color: string){
    if(this.colorScheme != color){
      this.isUpdated = true;
      this.tempColor = color;
      this.colorScheme = color;
    }else{
      this.isUpdated = false;
    }

    if(color == 'primary'){
      this.isPrimary = true;
      this.isSecondary = false;
      this.isTertiary = false;
      this.isSuccess = false;
      this.isWarning = false;
      this.isDanger = false;
      this.isLight = false;
      this.isMedium = false;
      this.isDark = false;
    }else if(color == 'secondary'){
      this.isPrimary = false;
      this.isSecondary = true;
      this.isTertiary = false;
      this.isSuccess = false;
      this.isWarning = false;
      this.isDanger = false;
      this.isLight = false;
      this.isMedium = false;
      this.isDark = false;
    }else if(color == 'tertiary'){
      this.isPrimary = false;
      this.isSecondary = false;
      this.isTertiary = true;
      this.isSuccess = false;
      this.isWarning = false;
      this.isDanger = false;
      this.isLight = false;
      this.isMedium = false;
      this.isDark = false;
    }else if(color == 'success'){
      this.isPrimary = false;
      this.isSecondary = false;
      this.isTertiary = false;
      this.isSuccess = true;
      this.isWarning = false;
      this.isDanger = false;
      this.isLight = false;
      this.isMedium = false;
      this.isDark = false;
    }else if(color == 'warning'){
      this.isPrimary = false;
      this.isSecondary = false;
      this.isTertiary = false;
      this.isSuccess = false;
      this.isWarning = true;
      this.isDanger = false;
      this.isLight = false;
      this.isMedium = false;
      this.isDark = false;
    }else if(color == 'danger'){
      this.isPrimary = false;
      this.isSecondary = false;
      this.isTertiary = false;
      this.isSuccess = false;
      this.isWarning = false;
      this.isDanger = true;
      this.isLight = false;
      this.isMedium = false;
      this.isDark = false;
    }else if(color == 'light'){
      this.isPrimary = false;
      this.isSecondary = false;
      this.isTertiary = false;
      this.isSuccess = false;
      this.isWarning = false;
      this.isDanger = false;
      this.isLight = true;
      this.isMedium = false;
      this.isDark = false;
    }else if(color == 'medium'){
      this.isPrimary = false;
      this.isSecondary = false;
      this.isTertiary = false;
      this.isSuccess = false;
      this.isWarning = false;
      this.isDanger = false;
      this.isLight = false;
      this.isMedium = true;
      this.isDark = false;
    }else if(color == 'dark'){
      this.isPrimary = false;
      this.isSecondary = false;
      this.isTertiary = false;
      this.isSuccess = false;
      this.isWarning = false;
      this.isDanger = false;
      this.isLight = false;
      this.isMedium = false;
      this.isDark = true;
    }else{
      this.isPrimary = false;
      this.isSecondary = false;
      this.isTertiary = false;
      this.isSuccess = false;
      this.isWarning = false;
      this.isDanger = false;
      this.isLight = false;
      this.isMedium = false;
      this.isDark = false;
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
