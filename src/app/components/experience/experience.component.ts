import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experiences = [
    {
      title: 'GRUPO ARGA',
      description: 'Developed automation scripts to optimize workflow efficiency, using Python to convert PDFs into images for neural network analysis of design blueprints.',
      date: 'September 2024 - Present'
      
    },
    {
      title: 'BTSSC',
      description: 'Developed an interactive dashboard for project management in the merchandising department, using C# and Angular with real-time data visualization.',
      date: 'February 2024 - August 2024'
    },
    {
      title: 'ALBA Synchrotron',
      description: 'Developed an approximation model for calculating the properties of a quadrupole doublet, integrated into advanced testing systems.',
      date: 'March 2023 - August 2025'
      
    },
    {
      title: 'Professional Service in CNC',
      description: 'Assisted in the repair and maintenance of machinery, focusing on electronic and mechanical systems.',
      date: 'July 2019 - 2022'
    }
  ];
}
