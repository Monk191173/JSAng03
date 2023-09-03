import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IcurTask } from '../../task-list/task-list.component';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() masTask: IcurTask[] = [];
  @Output() taskID = new EventEmitter();

  constructor() { }

  editTask(i: number): void { this.taskID.emit(i + 'e') }
  deleteTask(i: number): void { this.taskID.emit(i + 'd') }
  chkTask(ind: number): void { this.taskID.emit(ind + 'c'); }
}
