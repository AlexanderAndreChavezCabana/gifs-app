import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.models';


@Component({
  selector: 'app-gifs-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  constructor( private gifsService: GifsService ){ }

  get gifsList(): Gif[] {
    return this.gifsService.gifList;
  }



}
