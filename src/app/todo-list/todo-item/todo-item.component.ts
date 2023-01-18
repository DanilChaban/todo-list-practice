import {Component, Input} from '@angular/core';

@Component({
  selector: 'todo-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() todoName?: string;

  deleteItem = true;
}
