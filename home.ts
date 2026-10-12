import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonItem, IonLabel, IonList, IonRow, IonGrid, IonCardTitle, IonCard, IonCardContent } from '@ionic/angular';


interface Students {
  id: number;
  name: string;
  gender: string;
  course: string;
  year: number;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonCardContent, IonCard, IonCardTitle, IonGrid, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonRow]
})
export class HomePage {
//string interpolation
    welcomeMessage = '3rd Year Student List';


  students: Students[] = [
    {
      id: 1,
      name: 'Juan Dela Cruz',
      gender: 'Male',
      course: 'BS Information Technology',
      year: 3
    },
     { 
      id: 2,
      name: 'Maria Santos',
      gender: 'Female',
      course: 'BS Information Technology',
      year: 3
    },
     { 
      id: 3,
      name: 'Carlos Reyes',
      gender: 'Male',
      course: 'BS Information Technology',
      year: 3
    },
     { 
      id: 4,
      name: 'Angela Garcia',
      gender: 'Female',
      course: 'BS Information Technology',
      year: 3
    },
     { 
      id: 5,
      name: 'Mark Villanueva',
      gender: 'Male',
      course: 'BS Information Technology',
      year: 3
    },
     { 
      id: 6,
      name: 'Sofia Mendoza',
      gender: 'Female',
      course: 'BS Information Technology',
      year: 3
    },
     { 
      id: 7,
      name: 'Daniel Bautista',
      gender: 'Male',
      course: 'BS Information Technology',
      year: 3
    },
     { 
      id: 8,
      name: 'Beatrice Navarro',
      gender: 'Female',
      course: 'BS Information Technology',
      year: 3
    }
  ];

  showsStudentList: boolean = false;
  constructor() {}
}
