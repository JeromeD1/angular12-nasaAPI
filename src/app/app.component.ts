import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NasaService } from './services/nasa.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'nasaChallenge';

  constructor(private nasaService: NasaService) {
    this.getImageOfTheDay()
  }

  imageOfTheDay: string = ""

  getImageOfTheDay(){
    this.nasaService.getImageOfTheDay().subscribe(data => {
      this.imageOfTheDay = data
      console.log("imag nasa", data);
      
    })
  }
}
