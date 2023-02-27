import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentPage: string = "";
  title: string = 'restoration-basics';

  constructor() {

  }

  ngOnInit() {
    this.currentPage = "home";
  }

  navigateTo(route: "home" | "doctrines" | "first-vision") {
    this.currentPage = route;
  }
}
