import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css']
})
export class HomeComponent implements OnInit {
  @Input() currentPage = "";
  @Output() currentPageChange = new EventEmitter();

  constructor() {
 
  }

  ngOnInit() {
      
  }

  cardClickEvent(event: "doctrines" | "first-vision") {
    this.currentPageChange.emit(event);
  }
}
