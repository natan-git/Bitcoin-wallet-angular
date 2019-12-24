import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactAppComponent } from './contact-app/contact-app.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactService } from './contact.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from './material';
import { HomePageComponent } from './home-page/home-page.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ContactPreviewComponent } from './contact-preview/contact-preview.component'

@NgModule({
  declarations: [
    AppComponent,
    ContactAppComponent,
    ContactDetailsComponent,
    HomePageComponent,
    StatisticsComponent,
    ContactPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
