import { Component, AfterContentChecked } from '@angular/core';
export interface IcurTask {
  task: string,
  check: boolean,
  progress: string,
  delDis: boolean
}
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})



export class TaskListComponent implements AfterContentChecked {
  ngAfterContentChecked(): void {
    if (this.taskID != '') {
      this.id = parseInt(this.taskID);
      this.oper = this.taskID[this.taskID.length - 1];

      switch (this.oper) {
        case 'c': {
          this.masTask[this.id].check = !this.masTask[this.id].check;
          this.masTask[this.id].delDis = !this.masTask[this.id].delDis;
          this.masTask[this.id].check ? this.masTask[this.id].progress = 'DONE' :
            this.masTask[this.id].progress = 'IN PROGRESS';
          break
        }
        case 'e': { this.e_mode = true; this.tasksName = this.masTask[this.id].task; this.butName='Save'; break }
        case 'd': { this.masTask.splice(this.id, 1); break }
      }
    }
    this.taskID = '';
  }
  public butName='Add';
  public tasksName!: string;
  public taskID: string = '';
  public e_mode = false;
  public masTask: IcurTask[] = [];
  public id: number = -1;
  public oper: string = '';

  addTask(tName: string) {
    if (this.e_mode) {
      this.masTask[this.id].task = tName;
      this.e_mode = false;
      this.butName='Add';
      this.tasksName = '';
    }
    else {
      let pres = false;
      if (this.tasksName==''||this.tasksName==null){
        alert('You will not be able to do this task !!!'); pres = true;
      }
      for (const mas of this.masTask)
        if (mas.task == this.tasksName) { alert('This task already present !!!'); pres = true; };
      if (!pres) {
        this.masTask.push({ task: tName, check: false, progress: 'IN PROGRESS', delDis: true });
        this.tasksName = '';
      }
    }

  }

}
