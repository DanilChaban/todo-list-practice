import { Injectable } from '@angular/core';
import {Todo} from "../interfaces/todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() {
  }

  public set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public get(key: string): string {
    return JSON.parse(localStorage.getItem(key)!);
  }
}
