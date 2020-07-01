import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../../../Task';
import { TaskService } from '../../../service/task.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  task: Task;
  // taskid: int;

  constructor(private route : ActivatedRoute, private taskservice : TaskService) { }

  ngOnInit() {
    this.route.params.subscribe((data) => {
      // this.taskid = data.id;

      this.taskservice.getOne(data.id).subscribe((tsk) => {
        this.task = tsk;
        console.log(this.task);
      });
    });
  }

}
