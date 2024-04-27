import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.css',
})
export class ItemComponent {
  isEditting = false;
  @Input() task: Task = new Task('', false);
  @Output() taskToDelete = new EventEmitter();
  @Output() updateTask = new EventEmitter();

  deleteTask() {
    this.taskToDelete.emit();
  }
}
