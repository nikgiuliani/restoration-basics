import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.page';
import { CoreDoctrinesComponent } from './pages/core-doctrines/core-doctrines.page';
import { DoctrinePopoverComponent } from './shared-components/doctrine-popover/doctrine-popover.component';
import { FirstVisionComponent } from './pages/first-vision/first-vision.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
