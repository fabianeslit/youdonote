import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { NotemodalPage } from '../notemodal/notemodal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit  {
  todos : any = [];
  todosBkup : any = [];
  searchTerm : string = "";
  none : boolean = false;
  note = { 
    title : '',
    desc: ''
  };

  constructor(public toastController: ToastController, public modalController: ModalController, public loadingController : LoadingController) {
    
  }

  ngOnInit() {
    if(JSON.parse(localStorage.getItem('todos')) != null ){
      this.todos = JSON.parse(localStorage.getItem('todos'));
      this.todosBkup = JSON.parse(localStorage.getItem('todos'));
    }
  }

  ionViewWillEnter(){
    if(JSON.parse(localStorage.getItem('todos')) != null ){
      this.todos = JSON.parse(localStorage.getItem('todos'));
    }
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Loading...',
      duration: 100
    });
    await loading.present();    
  }

  async showModal() {
    this.presentLoading();
    const modal = await this.modalController.create({
      component: ModalPage
    });

    modal.onDidDismiss()
     .then((data) => {
       if(data.data.data != null){
        this.note.title = data.data.data.title,
        this.note.desc = data.data.data.desc   
        this.addTodo(this.note.title, this.note.desc); 
       }
      });
    return await modal.present();
  }

  addTodo(title: string, desc: string) {
    let newTodo = {
      title: title,
      desc: desc
    }
    this.todos.push(newTodo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  onSearchTerm(ev: CustomEvent) {
    this.todos = this.todosBkup;
    this.none = false;
    const val = ev.detail.value;
    if (val && val.trim() !== '') {
      this.todos = this.todos.filter(term => {
        return term.title.toLowerCase().indexOf(val.trim().toLowerCase()) > -1;
      });
    }

    if(this.todos.length == 0){
      this.none = true;
    }
  }
}
