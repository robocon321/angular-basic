import { Component, OnInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, AfterViewChecked {
  title: string = "Welcome about page";

  constructor() {
  }
  ngAfterViewChecked(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit() {
  }

}
