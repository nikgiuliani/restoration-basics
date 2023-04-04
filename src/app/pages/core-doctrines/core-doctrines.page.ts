import { Component, OnInit } from '@angular/core';

import { CORE_DOCTRINES } from 'src/app/constants/doctrine-data';
import { PopoverService } from 'src/app/services/popover.service';

@Component({
  selector: 'app-core-doctrines',
  templateUrl: './core-doctrines.page.html',
  styleUrls: ['./core-doctrines.page.css']
})
export class CoreDoctrinesComponent implements OnInit {
  coreDoctrines: any;
  
  constructor(private popoverService: PopoverService) { }

  ngOnInit() {
    this.coreDoctrines = Object.values(CORE_DOCTRINES);
  }

  onSelectCard(title: string) {
    this.popoverService.displayDoctrineDetails(title);
  }
}
