import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactAppComponent } from './contact-app/contact-app.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { HomePageComponent } from './home-page/home-page.component';
import { StatisticsComponent } from './statistics/statistics.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomePageComponent
  }, 
  {
    path: 'contact',
    component: ContactAppComponent
  }, 
  {
    path: 'contact/:id',
    component: ContactDetailsComponent
  }, 
  {
    path: 'statistics',
    component: StatisticsComponent
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
