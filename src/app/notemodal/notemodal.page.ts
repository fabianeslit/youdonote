import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController, ToastController, ModalController } from '@ionic/angular';
import { HomePage } from '../home/home.page';
import { ModalPage } from '../modal/modal.page';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-notemodal',
  templateUrl: './notemodal.page.html',
  styleUrls: ['./notemodal.page.scss'],
})
export class NotemodalPage implements OnInit {
  todos : any = [];
  private id : string;
  constructor(public actionSheetController: ActionSheetController, private route: ActivatedRoute, public modalController : ModalController, public alertController: AlertController, public toastController: ToastController, private navCtrl: NavController) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if(JSON.parse(localStorage.getItem('todos')) != null ){
      this.todos = JSON.parse(localStorage.getItem('todos'));
    }
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Note Actions',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Update',
        icon: '',
        handler: () => {
          this.navCtrl.navigateRoot('/noteupdatemodal/' + this.id);
        }
      }, {
        text: 'Delete',
        role: 'destructive',
        handler: () => {
          this.presentAlert();
        }
      }
      ]
    });
    await actionSheet.present();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Delete note?',
      message: 'This process cannot be undone. Are you sure you want to proceed?',
      buttons: [{
          text: 'Delete',
          cssClass: 'danger',
          role: 'destructive',
          handler: () => {
            this.deleteNote();
            this.navCtrl.navigateRoot('/home');
          }
        },{
          text: 'Cancel',
          role: 'cancel'
        }]
    });

    await alert.present();
  }

  async deleteNote(){
    let todos = JSON.parse(localStorage.getItem('todos'));
    todos.splice(this.id, 1);
    localStorage.setItem('todos', JSON.stringify(todos));
    this.presentToast();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your note has been deleted.',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }
}
