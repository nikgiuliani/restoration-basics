import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-doctrine-popover',
  templateUrl: './doctrine-popover.component.html',
  styleUrls: ['./doctrine-popover.component.css'],
})
export class DoctrinePopoverComponent {
  doctrineData: any;

  constructor(private popoverController: PopoverController) {}

  async closePage() {
    await this.popoverController.dismiss();
  }
}
