import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-noteupdatemodal',
  templateUrl: './noteupdatemodal.page.html',
  styleUrls: ['./noteupdatemodal.page.scss'],
})
export class NoteupdatemodalPage implements OnInit {
  private id : string;
  todos : any = [];
  note = {
    title : '',
    desc : '' 
  };
  constructor(public toastController: ToastController, public alertController: AlertController, private route: ActivatedRoute, private navCtrl: NavController) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if(JSON.parse(localStorage.getItem('todos')) != null ){
      this.todos = JSON.parse(localStorage.getItem('todos'));
    }
    this.note.title = this.todos[this.id].title;
    this.note.desc = this.todos[this.id].desc;
  }

  updateTodo() {
    let todos = JSON.parse(localStorage.getItem('todos'));
    todos[this.id].title = this.note.title;
    todos[this.id].desc = this.note.desc;
    localStorage.setItem('todos', JSON.stringify(todos));
    this.navCtrl.navigateRoot('/notemodal/' + this.id);
    this.presentToast();
  }

  public validate(){
    if(this.note.title.length == 0 || this.note.desc.length == 0){
      this.presentAlert();
    }else{
      this.updateTodo();
    }
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

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your note has been updated.',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }

}
