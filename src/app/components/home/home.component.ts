import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Todo, TodoElement } from '@models/todo.model';
import { TodoService } from '@services/todo.service';

const MODULES = [
  ReactiveFormsModule
]

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ MODULES ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  todos: TodoElement[] = [];

  todoForm = new FormGroup({
    task: new FormControl('', [Validators.minLength(3), Validators.required]),
  });

  private todoService = inject(TodoService)

  createTask(): void {
    if (!this.todoForm.valid) {
      return;
    }
  
    const newTask: TodoElement = {
      todo: this.todoForm.value.task ?? '',
      completed: false,
      userId: 5
    };
  
    this.todoService.postTask(newTask).subscribe({
      next: (data: TodoElement) => {
        this.todos.push(data);
        this.todoForm.reset();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
  

  ngOnInit(): void {
    this.todoService.getTodos().subscribe({
      next: (data: Todo) => {
        this.todos = data.todos;
        console.log(data)
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
