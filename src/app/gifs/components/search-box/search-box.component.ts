import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {
  @ViewChild('TxtInputSearch')
  public textInputSearch!: ElementRef<HTMLInputElement>;

  constructor ( private gifsService: GifsService ) {

  }

  searchTag(): void {
    const newText = this.textInputSearch.nativeElement.value;
    console.log({newText});
    this.gifsService.searchTag(newText);
    this.textInputSearch.nativeElement.value = '';
  }

}
