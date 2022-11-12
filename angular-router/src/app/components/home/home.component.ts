import { User } from './../../models/user.model';
import { AboutComponent } from './../about/about.component';
import { Component, OnInit, ViewChild, ViewContainerRef, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  // @ViewChild('about', {read: ViewContainerRef}) aboutRef!: ViewContainerRef;
  @ViewChild('name', {static: true}) nameRef!: ElementRef;
  private user!: User;

  constructor() {    
  }

  ngAfterViewInit(): void {
    // this.aboutRef.createComponent(AboutComponent);
  }

  ngOnInit() {
  }

}
