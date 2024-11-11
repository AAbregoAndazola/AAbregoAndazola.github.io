import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ContactComponent } from './components/contact/contact.component';
import { EducationComponent } from './components/education/education.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'portfolio', component: PortafolioComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'education', component: EducationComponent},
  { path: 'contact', component: ContactComponent }
];


