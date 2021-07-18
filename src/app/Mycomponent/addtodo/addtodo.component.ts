import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css'],
})
export class AddtodoComponent implements OnInit {
  title!: string;
  desc!: string;
  @Output()
  todoAdd: EventEmitter<Todo> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  onSubmit() {
    if (!this.title && !this.desc) return alert('Please add title and desc');
    const todo: Todo = {
      sno: 8,
      title: this.title,
      desc: this.desc,
      isActive: true,
    };
    this.todoAdd.emit(todo);
  }
}
