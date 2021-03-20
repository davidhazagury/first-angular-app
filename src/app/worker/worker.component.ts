import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.scss']
})
export class WorkerComponent implements OnInit {

  constructor() { }
  worker = ['David', 'Eric', 'Ariel', 'Alan']
  ngOnInit(): void {
  }

}
