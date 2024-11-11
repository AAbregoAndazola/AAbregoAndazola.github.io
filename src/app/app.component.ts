import { Component, importProvidersFrom } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';  // Asegúrate de que el componente esté importado
import { ContactComponent } from './components/contact/contact.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { EducationComponent } from "./components/education/education.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [NavbarComponent, ContactComponent, ExperienceComponent, PortafolioComponent, AboutComponent, HomeComponent, EducationComponent] // Importa los componentes
  // Importa los componentes
})
export class AppComponent {
  title = 'AAbregoAndazola.github.io';
}
