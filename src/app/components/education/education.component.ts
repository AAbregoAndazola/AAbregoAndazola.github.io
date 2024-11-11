import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importa CommonModule

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  standalone: true,    // Marca el componente como standalone (si no tienes un AppModule)
  imports: [CommonModule]  // Agrega CommonModule a las importaciones
})
export class EducationComponent {
  educations = [
    { title: 'Bachelor of Science in Engineering Physics', description: 'Autonomous University of Chihuahua', date: 'January 2019 - May 2024' },
    { title: 'Bachelor of Software Engineering', description: 'Autonomous University of Chihuahua', date: 'June 2021 - August 2024' },
    { title: 'Computer Technician', description: 'High School of the State of Chihuahua, Campus No.4', date: 'August 2015 - June 2018'}
  ];
}
