import { Component, OnInit } from '@angular/core';
import { TestServiceService } from './test-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title: String;

  ngOnInit(): void {
    this.loadTitle();
  }

  constructor(public testService: TestServiceService){
    console.log("start");
  }

  loadTitle() {
    console.log("Load title");
    return this.testService.TestGet().subscribe((data :String) => {
      this.title = data;
    })
  }
}
