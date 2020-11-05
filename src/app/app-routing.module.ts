import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomeComponent } from './components/home/home.component';
import { OurWorkComponent } from './components/our-work/our-work.component';
import { SpecialsComponent } from './components/specials/specials.component';

const routes: Routes = [
  { path: '', redirectTo: 'about-us', pathMatch: 'full'},
  { path: 'about-us', component: AboutUsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'our-work', component: OurWorkComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'specials', component: SpecialsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
