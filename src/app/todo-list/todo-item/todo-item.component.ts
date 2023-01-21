import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'todo-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todoName?: string;
  @Input() todoId?: number;
  @Output() remove: EventEmitter<number> = new EventEmitter<number>();
  @Output() update: EventEmitter<any> = new EventEmitter<any>();

  item: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  removeItem(): void {
    this.remove.emit(this.todoId);
  }

}
