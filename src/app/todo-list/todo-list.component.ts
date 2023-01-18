import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Todo} from "../interfaces/todo";
import {TodoService} from "../services/todo.service";

@Component({
  selector: 'todo-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {


  form = this.formBuilder.group({
    todoName: ['', Validators.required]
  });

  todoList: Todo[] = [];

  constructor(
    private todoService: TodoService,
    private readonly formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.todoService.setItem('form', 'todoName');
    console.log('check', this.todoService.getItem(this.form));
  }


  addTodo(): void {
    const todoItem: Todo = {
      name: this.form.get('todoName')?.getRawValue(),
      id: new Date().getSeconds()
    };
    this.todoList.push(todoItem)
  }

}
