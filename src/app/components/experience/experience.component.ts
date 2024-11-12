import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importa CommonModule

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  standalone: true,    // Marca el componente como standalone (si no tienes un AppModule)
  imports: [CommonModule]  // Agrega CommonModule a las importaciones
})
export class ExperienceComponent {
  experiences = [
    { title: 'ALBA Synchrotron', description: 'Developed an approximation model for calculating the properties of a quadrupole doublet, integrated into advanced testing systems.', date: 'March 2023 - August 2025' },
    { title: 'GRUPO ARGA', description: 'I developed process automation scripts to optimize workflow efficiency. I created an executable Python program that converts PDF documents into images. These images, representing design blueprints, are analyzed by a neural network built from scratch to detect measurements and key element positions. This approach streamlined data extraction and improved accuracy in interpreting technical specifications.', date: 'September 2024 - Present'},
    { title: 'BTSSC', description: 'Developed an interactive dashboard for project management in the merchandising department, using C# and Angular, with the implementation of authentication systems and real-time data visualization.', date: 'February 2024 - August 2024' },
    { title: 'Professional Service in CNC', description: 'Assisted in the repair and maintenance of machinery, focusing on electronic and mechanical systems.', date: 'July 2019 - 2022'}
  ];
}