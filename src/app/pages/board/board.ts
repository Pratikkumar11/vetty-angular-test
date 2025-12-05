import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task, TaskStatus } from '../../models/task.model';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './board.html',
  styleUrls: ['./board.scss'],
})
export class BoardComponent {
  todo: Task[] = [
    { id: 'T-1', title: 'Sample To Do', description: 'Example task', status: 'todo' },
  ];
  inProgress: Task[] = [];
  review: Task[] = [];
  done: Task[] = [];

  addTask(status: TaskStatus): void {
    const id = prompt('Enter Task ID (e.g. T-2)');
    if (!id) return;

    const title = prompt('Enter Task Title');
    if (!title) return;

    const description = prompt('Enter Description (optional)') || '';

    const task: Task = { id, title, description, status };

    this.getColumn(status).push(task);
  }

  private getColumn(status: TaskStatus): Task[] {
    switch (status) {
      case 'todo':
        return this.todo;
      case 'in-progress':
        return this.inProgress;
      case 'review':
        return this.review;
      case 'done':
        return this.done;
    }
  }
}
