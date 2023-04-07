import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-nav-popover',
  templateUrl: './nav-popover.component.html',
  styleUrls: ['./nav-popover.component.css'],
})
export class NavPopoverComponent {
  doctrineData: any;

  constructor(private popoverController: PopoverController) {}

  async selectOption(option: 'home' | 'doctrines' | 'first-vision') {
    await this.popoverController.dismiss(option);
  }
}
