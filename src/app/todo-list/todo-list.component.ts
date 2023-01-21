import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Todo} from "../interfaces/todo";

@Component({
  selector: 'todo-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  form = this.formBuilder.group({
    todoName: ['', Validators.required],
  });

  todoList: Todo[] = [];

  constructor(private readonly formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.todoList = JSON.parse(localStorage.getItem('todo-list')!);
  }

  addTodo(): void {
    const todoItem: Todo = {
      name: this.form.get('todoName')?.getRawValue(),
      id: Date.now()
    };
    this.todoList.push(todoItem);
    localStorage.setItem('todo-list', JSON.stringify(this.todoList));
  }

  removeItem(event: number) {
    const remove = this.todoList.findIndex(el => el.id === event);

    this.todoList.splice(remove, 1);
  }
}
