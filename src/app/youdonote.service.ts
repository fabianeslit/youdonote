import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { youdonote } from './youdonote';

@Injectable({
  providedIn: 'root'
})
export class YoudonoteService extends youdonote  {

  constructor(public storage: Storage) { 
    super();
    console.log('TodoService Works');
    this.load();
  }


  getTodos() {
    let todos = JSON.parse(localStorage.getItem('todos'));
    return todos;
  }

  addTodo(newTodo) {
     let todos = JSON.parse(localStorage.getItem('todos'));
     // Add New TodoService
     todos.push(newTodo);
     // Set New Todos
     localStorage.setItem('todos', JSON.stringify(todos));
  }

  deleteTodo(todoText) {
    let todos = JSON.parse(localStorage.getItem('todos'));

    for(let i = 0; i <todos.length; i++) {
     if(todos[i].text == todoText) {
         todos.splice(i, 1);
     }
  }
     // Set New Todos
     localStorage.setItem('todos', JSON.stringify(todos));
  }

  updateTodo(oldText, newText){  let todos = JSON.parse(localStorage.getItem('todos'));

    for(let i = 0; i <todos.length; i++) {
     if(todos[i].text == oldText) {
       todos[i].text = newText;
     }
  }
     // Set New Todos
     localStorage.setItem('todos', JSON.stringify(todos));
  }
}


