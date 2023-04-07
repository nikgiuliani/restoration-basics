import { Component, OnInit, HostListener } from '@angular/core';
import { NavPopoverComponent } from './shared-components/nav-popover/nav-popover.component';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  currentPage: string = '';
  innerWidth: any;

  @HostListener('window:resize', ['$event'])
  onResize() {
    console.log(this.innerWidth);
    this.innerWidth = window.innerWidth;
  }

  constructor(private popoverController: PopoverController) {}

  ngOnInit() {
    this.currentPage = 'home';
    this.innerWidth = window.innerWidth;
  }

  navigateTo(route: 'home' | 'doctrines' | 'first-vision') {
    this.currentPage = route;
  }

  async displayNavOptions(ev) {
    const popover = await this.popoverController.create({
      component: NavPopoverComponent,
      event: ev,
      mode: 'md',
      cssClass: 'nav-popover-content',
      side: 'bottom',
      alignment: 'end',
    });
    await popover.present();
    const onDidDismiss = await popover.onDidDismiss();
    onDidDismiss.role !== 'backdrop' && this.navigateTo(onDidDismiss.data);
  }
}
