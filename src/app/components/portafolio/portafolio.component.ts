import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importa CommonModule

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.scss'],
  standalone: true,    // Marca el componente como standalone (si no tienes un AppModule)
  imports: [CommonModule]  // Agrega CommonModule a las importaciones
})
export class PortafolioComponent {
  projects = [
    { title: 'Programming Languages', description: 'Python, SQL, JavaScript, C#, Angular, LaTeX, Mathematica.', image: 'assets/project1.jpg' },
    { title: 'Data Analysis and Machine Learning', description: 'Pandas, Numpy, Scikit-learn, TensorFlow.', image: 'assets/project2.jpg' },
    { title: 'Tools', description: 'Power BI, Postman, Microsoft Office.', image: 'assets/project3.jpg' }
  ];
}
