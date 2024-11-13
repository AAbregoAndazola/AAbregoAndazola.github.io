import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component'; // Asegúrate de tener un AppComponent como raíz
import { AboutComponent } from './app/components/about/about.component';
import { PortafolioComponent } from './app/components/portafolio/portafolio.component';
import { ExperienceComponent } from './app/components/experience/experience.component';
import { EducationComponent } from './app/components/education/education.component';
import { ContactComponent } from './app/components/contact/contact.component';
import { LucideAngularModule, Camera, Moon, Sun } from 'lucide-angular';
import {  Linkedin, Github, Twitter } from 'lucide-angular';
const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'portfolio', component: PortafolioComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'education', component: EducationComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: '**', redirectTo: 'about' }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      LucideAngularModule.pick({ Camera, Moon, Sun }) // Importa solo los iconos que necesitas
    )
  ]
}).catch(err => console.error(err));
