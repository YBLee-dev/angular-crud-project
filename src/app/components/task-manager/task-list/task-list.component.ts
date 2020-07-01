import { Component, OnInit } from '@angular/core';
import { Task } from '../../../Task';
import { TaskService } from '../../../service/task.service';
import { MessageService } from '../../../service/message.service';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks : Task[] = [];

  constructor(private taskservice : TaskService, private msg : MessageService) { }

  ngOnInit() {
    this.getAllTasks();
    this.msg.getMessage().subscribe((data) => {
      this.getAllTasks();
    })
  }

  getAllTasks()
  {
    this.taskservice.getTasks().subscribe((all)=>{
      this.tasks = all;
    })
  }

}
