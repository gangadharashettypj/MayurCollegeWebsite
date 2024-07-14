import { Component } from '@angular/core';

@Component({
  selector: 'app-lab',
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.css']
})
export class LabComponent {
  labs = [
    {
      name: 'Laboratory 1',
      image: 'https://www.dropbox.com/scl/fi/wm7kyk5c92nry2c6ewm3j/gallery-6.JPG?rlkey=kkgj0sh5qexylobbgyqohjani&st=ywktu7pb&dl=1',
      description: 'The laboratories are completely equipped with items required as per norms...'
    },
    {
      name: 'Laboratory 2',
      image: 'https://www.dropbox.com/scl/fi/8hpz71rkmipklccrajz8f/gallery-5.JPG?rlkey=9x6o2kak7himor219u0z73zem&st=rqsrv769&dl=1',
      description: 'The laboratories are constructed with keeping in mind their compatibility...'
    },
    // Add more labs as needed
  ];

}
