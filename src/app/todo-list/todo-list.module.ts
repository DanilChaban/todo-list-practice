import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoListRoutingModule } from './todo-list-routing.module';
import { TodoListComponent } from './todo-list.component';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import { TodoItemComponent } from './todo-item/todo-item.component';
import {MatCheckboxModule} from "@angular/material/checkbox";


@NgModule({
    declarations: [
        TodoListComponent,
        TodoItemComponent
    ],
    exports: [
        TodoItemComponent
    ],
    imports: [
        CommonModule,
        TodoListRoutingModule,
        MatInputModule,
        MatButtonModule,
        ReactiveFormsModule,
        MatCheckboxModule
    ]
})
export class TodoListModule { }
