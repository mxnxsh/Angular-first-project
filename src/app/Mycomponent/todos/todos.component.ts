import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  localItem: string | null;
  constructor() {
    this.localItem = localStorage.getItem('todos');
    if (this.localItem) this.todos = JSON.parse(this.localItem);
    else this.todos = [];
  }

  ngOnInit(): void {}
  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  addTodo(todo: Todo) {
    console.log(todo);
    this.todos.unshift(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  toggleTodo(todo: Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos[index].isActive = !this.todos[index].isActive;
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
