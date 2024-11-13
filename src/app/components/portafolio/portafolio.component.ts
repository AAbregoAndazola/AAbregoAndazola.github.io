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
    {
      title: 'Programming Languages',
      description: 'Expertise in Python, SQL, JavaScript, C#, Angular, LaTeX, and Mathematica. Developing robust and scalable solutions across multiple platforms.',
      images: [
        '/assets/Screenshot 2024-11-12 140434.png',
        '/assets/Screenshot 2024-11-12 140500.png',
        '/assets/Screenshot 2024-11-12 140524.png',
        '/assets/Screenshot 2024-11-12 141019.png',
        '/assets/Screenshot 2024-11-12 141038.png',
        '/assets/Screenshot 2024-11-12 141113.png',
        '/assets/Screenshot 2024-11-12 141132.png'
      ]
    },
    {
      title: 'Data Analysis & ML',
      description: 'Advanced data analysis and machine learning implementations using Pandas, Numpy, Scikit-learn, and TensorFlow frameworks.',
      images: [
        '/assets/F3.png',
        '/assets/F4.png',
        '/assets/F5.png',
        '/assets/F11.png',
        '/assets/F12.png',
        '/assets/F13.png',
        '/assets/F21.png',
        '/assets/F31.png',
        '/assets/F32.png'
      ]
    },
    {
      title: 'Professional Tools',
      description: 'Proficient in Power BI for data visualization, Postman for API testing, and Microsoft Office suite for business solutions.',
      images: [
        '/assets/1.png',
        '/assets/2.png',
        '/assets/3.png',
        '/assets/drift.png',
        '/assets/asd.png',
        '/assets/esd.png',
        '/assets/fg.png',
        '/assets/gh.png',
        '/assets/po3.png'
      ]
    }
  ];
  // Estado del modal
  isModalOpen = false;
  selectedImage: string | null = null;

  // Abre el modal con la imagen seleccionada
  openModal(image: string): void {
    this.selectedImage = image;
    this.isModalOpen = true;
  }

  // Cierra el modal
  closeModal(): void {
    this.isModalOpen = false;
    this.selectedImage = null;
  }
}
