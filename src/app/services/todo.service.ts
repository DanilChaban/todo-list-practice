import { Injectable } from '@angular/core';
import {Todo} from "../interfaces/todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }
  public setItem(key: string, value: string) {
     localStorage.setItem(key, JSON.stringify(value));
  }

  public getItem(key: string) {
    return localStorage.getItem(JSON.parse(key));
  }

  public removeItem(key: string) {
    localStorage.removeItem(key);
  }

  public clear(): void {
    localStorage.clear();
  }

}
