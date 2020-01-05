import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from './material';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ContactService } from './services/contact.service';
import { ContactAppComponent } from './contact-app/contact-app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ContactPreviewComponent } from './contact-preview/contact-preview.component';
import { ContactSearchComponent } from './contact-search/contact-search.component';
import { UserService } from './services/user.service';
import { UtilService } from './services/util.service';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    ContactAppComponent,
    ContactDetailsComponent,
    HomePageComponent,
    StatisticsComponent,
    ContactPreviewComponent,
    ContactSearchComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,

    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),

    LayoutModule,

    MatToolbarModule,

    MatButtonModule,

    MatSidenavModule,

    MatIconModule,

    MatListModule

  ],
  providers: [ContactService, UserService, UtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
