import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true
})
export class ContactComponent {
  // Opcionalmente puedes definir aquí las URLs de tus redes sociales
  linkedinUrl: string = 'https://www.linkedin.com/in/tu-usuario';
  githubUrl: string = 'https://github.com/tu-usuario';
  twitterUrl: string = 'https://twitter.com/tu-usuario';
}
