import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

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
  empty : boolean = false;
  colorScheme : string = "";
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

    if(this.todos.length == 0){
      this.empty = true;
    }
    
    if(localStorage.getItem('color')){
      this.colorScheme = localStorage.getItem('color');
    }else{
      this.colorScheme = "primary";
      localStorage.setItem('color', "primary");
    }
  }

  ionViewWillEnter(){
    if(JSON.parse(localStorage.getItem('todos')) != null ){
      this.todos = JSON.parse(localStorage.getItem('todos'));
      this.todosBkup = JSON.parse(localStorage.getItem('todos'));
    }
    if(localStorage.getItem('color')){
      this.colorScheme = localStorage.getItem('color');
    }else{
      this.colorScheme = "primary";
      localStorage.setItem('color', "primary");
    }
    if(this.todos.length == 0){
      this.empty = true;
    }
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Loading...',
      duration: 1500
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
    this.empty = false;
    localStorage.setItem('todos', JSON.stringify(this.todos));
    this.todosBkup = JSON.parse(localStorage.getItem('todos'));
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

    if(this.todos.length == 0 && this.empty == false){
      this.none = true;
    }
  }
}
