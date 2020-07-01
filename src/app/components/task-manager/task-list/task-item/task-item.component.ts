import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../../../Task';
import { TaskService } from '../../../../service/task.service';
import { MessageService } from '../../../../service/message.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input()task:Task;

  constructor(private ts : TaskService, private msg : MessageService) { }

  ngOnInit() {
  }

  Delete()
  {
    this.ts.deleteTask(this.task.id).subscribe((data) => {
      this.msg.setMessage("something happen1");
    });
  }

}
