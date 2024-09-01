import { Component } from '@angular/core';
import { Project } from '../../interfaces/project.interface';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  public projects: Project[] =[
    {
      id:1,
      puesto: 'Desarrollador Analista - CITIBANAMEX ',
      activity:[
        {
          sistema: 'Sistema de Intercambio Bancario',
          description:'Documentación, apoyo a pruebas, analisis de programas'
        },
        {
          sistema: 'Sistema de inventario de Cheques',
          description:'Documentación, apoyo a pruebas, analisis de programas y requerimientos,desarrollo en cobol, pruebas unitarias e integrales.'
        },
        {
          sistema: 'Otras actividades',
          description:'Creación de diagramas de flujo, clases, soporte en desarrollo con Java.'
        }
      ]
    },
    {
      id:2,
      puesto: 'Desarrollador web-TecNM Campus Tuxtla Gutiérrez',
      activity:[
        {
          id: 1,
          sistema: 'Desarrollador web',
          router: true,
          description:'Sistema web de mensajería para el Tenológico Nacional de México Campus Tuxtla Gutiérrez'
        }
      ]
    },
    {
      id:1,
      puesto: 'Desarrollador web-Freelance',
      activity:[
        {
          id: 2,
          sistema: 'Sistema de Ventas',
          router: true,
          description:'Sistema administrativo de ventas, usuario, almacenes. Basado en roles'
        },
        {
          id: 3,
          sistema: 'Sistema para seguimiento de actividades',
          router: true,
          description:'Sistema para adimistrar las actividades y animales de un rancho'
        }
      ]
    },
  ]
}
