import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { NavbarComponent } from './app/components/navbar/navbar.component';
import { AboutComponent } from './app/components/about/about.component';
import { PortafolioComponent } from './app/components/portafolio/portafolio.component';
import { ExperienceComponent } from './app/components/experience/experience.component';
import { EducationComponent } from './app/components/education/education.component';
import { ContactComponent } from './app/components/contact/contact.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'portfolio', component: PortafolioComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'education', component: EducationComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: 'about', pathMatch: 'full' }, // Ruta principal redirige a About
  { path: '**', redirectTo: 'about' } // Redirige rutas no encontradas a About
];

bootstrapApplication(NavbarComponent, {
  providers: [
    provideRouter(routes)
  ]
}).catch(err => console.error(err));
