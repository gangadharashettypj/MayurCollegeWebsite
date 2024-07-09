// For fetching images from backend

// import { HttpClient } from '@angular/common/http';
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-gallary',
//   templateUrl: './gallary.component.html',
//   styleUrls: ['./gallary.component.css'],
// })
// export class GallaryComponent {
//   images: any;
//   constructor(private http: HttpClient) {}
//   ngOnInit(): void {
//     this.http
//       .get('https://mayurcollegewebsite.onrender.com/getimages')
//       .subscribe(
//         (response) => {
//           this.images = response;
//           console.log(this.images);
//         },

//         (error) => {
//           console.error('Loding failed:', error);
//         }
//       );
//   }
// }

import { Component } from '@angular/core';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css']
})
export class GallaryComponent {
  images = [
    {
      image: 'https://dl.dropboxusercontent.com/s/wbcwfk0r50otd19k6is7j/galley-2.JPG?rlkey=l51ln3nil1mlvxibtm1zl20x0&st=1nrnjdpi',
      // title: 'Photo 1',
      // description: 'Description for photo 1'
    },
    {
      image: 'https://dl.dropboxusercontent.com/s/qjjkzuwadj7igser225at/galley-1.JPG?rlkey=u67a8oy9ahi2ie70ewbces4lt&st=7vlzeq0u',
      // title: 'Photo 2222',
      // description: 'Description for photo 2'
    },
    {
      image: 'https://dl.dropboxusercontent.com/s/xjzw1bqqdtnq4oms83ql6/gallery-3.JPG?rlkey=gzgu61lstxuyvgq09cl8g0zxd&st=0zgg2n92',
      // title: 'Photo 3',
      // description: 'Description for photo 3'
    },
    {
      image: 'https://dl.dropboxusercontent.com/s/8hpz71rkmipklccrajz8f/gallery-4.JPG?rlkey=9x6o2kak7himor219u0z73zem&st=nlyi210u',
      // title: 'Photo 4',
      // description: 'Description for photo 1'
    },
    {
      image: 'https://dl.dropboxusercontent.com/s/wm7kyk5c92nry2c6ewm3j/gallery-5.JPG?rlkey=kkgj0sh5qexylobbgyqohjani&st=dj05vv2d',
      // title: 'Photo 5',
      // description: 'Description for photo 5'
    },
    {
      image: 'https://dl.dropboxusercontent.com/s/yq5enfw05esel6szyjrdd/gallery-6.JPG?rlkey=6i1jwigwv0owd6rebc0qcyb1i&st=fptqwxn2',
      // title: 'Photo 6',
      // description: 'Description for photo 3'
    },
    {
      image: 'https://dl.dropboxusercontent.com/s/vnmxbdhekuwxpwakc40z7/gallery-7.JPG?rlkey=8yqfddpdk4npb6l2jtj6k0t85&st=rw81w588',
      // title: 'Photo 7',
      // description: 'Description for photo 1'
    },
    {
      image: 'https://dl.dropboxusercontent.com/s/59ty8w813mygm4ukz6be4/gallery-8.JPG?rlkey=0o9eqmec997i85gx7tra3fwxg&st=om7dd2mv',
      // title: 'Photo 8',
      // description: 'Description for photo 2'
    },
    {
      image: 'https://dl.dropboxusercontent.com/s/vnmxbdhekuwxpwakc40z7/gallery-9.JPG?rlkey=8yqfddpdk4npb6l2jtj6k0t85&st=rw81w588',
      // title: '',
      // description: ''
    }
    // Add more images as needed
  ];
}
