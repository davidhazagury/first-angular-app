import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.scss']
})
export class WorkerComponent implements OnInit {

  constructor() { }

  nameOfWorker = 'David';
  lastNameOfWorker = 'Hernandez'
  private age = 27;
  company = 'Google';

  getWorkerAge(){
    return this.age;
  }

  setCompany(company:string) {

  }

  ngOnInit(): void {
  }

}
