import { Component, OnInit, ViewChild} from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  @ViewChild('taskInput') input;
  colorScheme : string = "";

  constructor(public modalCtrl: ModalController,public toastController: ToastController, public alertController : AlertController) { }

  ngOnInit() {
    this.colorScheme = localStorage.getItem('color');
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Oops',
      subHeader: '',
      message: 'Please enter required fields',
      buttons: ['OK']
    });

    await alert.present();
  }

  emptyTitle : boolean = true;
  note = {
    title : '',
    desc : '' 
  };

  public closeModal() {
    if(this.note.title.length != 0 && this.note.desc.length != 0){
      this.modalCtrl.dismiss({
        'dismissed': true,
        'data' : this.note
      });
    }else{
      this.modalCtrl.dismiss({
        'dismissed': true,
        'data' : null
      });
    }
  }

  public validate(){
    if(this.note.title.length == 0 || this.note.desc.length == 0){
      this.presentAlert();
    }else{
      this.presentToast();
    }
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your note has been saved.',
      duration: 2000,
      color: 'success'
    });
    this.closeModal();
    toast.present();
  }

  checkinputT(ev: CustomEvent){
    if(this.note.title.length == 0){
      this.emptyTitle = true;
    }else{
      this.emptyTitle = false;
    }
  }
}
