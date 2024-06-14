import { Injectable, inject } from '@angular/core';
import { environment } from '@environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo, TodoElement } from '@models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  apiUrl = environment.apiUrl;

  private http = inject(HttpClient)

  getTodos(): Observable<Todo> {
    return this.http.get<Todo>(`${this.apiUrl}?limit=5&skip=10`);
  }

  // Esto no guardará la tarea en el servidor porque es una api para tests
  postTask(task: TodoElement): Observable<TodoElement> {
    return this.http.post<TodoElement>(`${this.apiUrl}/add`, task);
  }
}