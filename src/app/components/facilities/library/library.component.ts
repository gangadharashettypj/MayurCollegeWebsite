import { Component } from '@angular/core';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent {
libraries = [
    {
      name: 'Library Section 1',
      image: 'assets/lib1.jpg',
      description: 'Well maintained library with sufficient references and book issue section and E-library. All books are segregated subject wise and shelved in the properly labelled cupboards.'
    },
    {
      name: 'Library Section 2',
      image: 'assets/lib2.jpg',
      description: 'Another description of the library section with specific details about the facilities and resources available.'
    },
    {
      name: 'Library Section 3',
      image: 'assets/lib3.jpg',
      description: 'Description for the third library section focusing on unique features and benefits for students and faculty.'
    }
  ];
}
