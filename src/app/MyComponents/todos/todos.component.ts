import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit{
  todos: Todo[];
  constructor() {
    this.todos=[
      {
        sno: 1,
        title: "obj1",
        desc: "this is decription",
        active: true
      },
      {
        sno: 2,
        title: "obj2",
        desc: "this is decription",
        active: true,
      },
      {
        sno: 3,
        title: "obj3",
        desc: "this is decription",
        active: true
      }
    ]
  }
  ngOnInit(): void {
    
  }
  deleteTodo(todo: Todo) {
    console.log(todo);
    const index= this.todos.indexOf(todo);
    this.todos.splice(index,1);
  }
}
