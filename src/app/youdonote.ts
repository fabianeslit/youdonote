export class youdonote {
    load() {
      if(localStorage.getItem('todos') === null || localStorage.getItem('todos') == undefined) {
        console.log('No Todos Found... Creating...');
        let todos = [
          {
            title : '',
            desc: ''
          }
        ];
  
        localStorage.setItem('todos', JSON.stringify(todos));
        return 
      } else {
        console.log('Found Todos...');
      }
    }
  }
