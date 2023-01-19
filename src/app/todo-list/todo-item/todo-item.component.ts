import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'todo-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todoName?: string;

  deleteItem = true;

  constructor() {
  }

  ngOnInit() {
  }
}
