import { Injectable } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { CORE_DOCTRINES } from '../constants/doctrine-data';
import { DoctrinePopoverComponent } from '../shared-components/doctrine-popover/doctrine-popover.component';

@Injectable({
  providedIn: 'root',
})
export class PopoverService {
  constructor(private popoverController: PopoverController) {}

  /* @params: the title of a doctrine object */
  async displayDoctrineDetails(doctrine: string) {
    const doctrineId = Object.keys(CORE_DOCTRINES).find(
      (key) => CORE_DOCTRINES[key].title === doctrine
    );
    const doctrineData = CORE_DOCTRINES[doctrineId];
    const popover = await this.popoverController.create({
      component: DoctrinePopoverComponent,
      componentProps: {
        doctrineData: doctrineData,
      },
      cssClass: 'popover-content',
    });

    return await popover.present();
  }
}
