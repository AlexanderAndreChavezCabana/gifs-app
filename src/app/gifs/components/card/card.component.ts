import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.models';

@Component({
  selector: 'app-gifs-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input()
  public gif!: Gif;

}
