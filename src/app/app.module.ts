import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.page';
import { CoreDoctrinesComponent } from './pages/core-doctrines/core-doctrines.page';
import { DoctrinePopoverComponent } from './shared-components/doctrine-popover/doctrine-popover.component';
import { FirstVisionComponent } from './pages/first-vision/first-vision.component';
import { PopoverService } from './services/popover.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoreDoctrinesComponent,
    DoctrinePopoverComponent,
    FirstVisionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot({
      mode: "md"
    })
  ],
  providers: [PopoverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
