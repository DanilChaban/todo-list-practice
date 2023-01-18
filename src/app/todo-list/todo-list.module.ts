import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoListRoutingModule } from './todo-list-routing.module';
import { TodoListComponent } from './todo-list.component';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import { TodoItemComponent } from './todo-item/todo-item.component';


@NgModule({
  declarations: [
    TodoListComponent,
    TodoItemComponent
  ],
  imports: [
    CommonModule,
    TodoListRoutingModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ]
})
export class TodoListModule { }
