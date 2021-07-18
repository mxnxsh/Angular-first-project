import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  @Input() todo!: Todo;
  @Input() i!: number;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  onDeleteHandler(todo: Todo) {
    this.todoDelete.emit(todo);
    console.log('deleted');
  }
  onCheckboxClick(todo: Todo) {
    this.todoCheckbox.emit(todo);
    console.log(this.i);
  }
}
