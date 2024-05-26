import { Component } from '@angular/core';
import AOS from 'aos'
@Component({
  selector: 'app-bpharm',
  templateUrl: './bpharm.component.html',
  styleUrls: ['./bpharm.component.css']
})
export class BpharmComponent {
  constructor()
  {
    AOS.init()
  }
}
