import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.models';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  constructor( private http: HttpClient) {
    this.loadLocalStorage();

  }

  public gifList: Gif[] = [];

  private apiKey: string = 'fO0UBvB0K8oV4Ayo3djKWNAp5E14oCbc';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';

  private _tagsHistory: string [] = [];

  get tagsHistory() {
    return [...this._tagsHistory];
  }



  public organizeTags ( newTag: string ): void {
    newTag = newTag.toLowerCase()
    // Filtramos tag, y dejamos por fuera el que ingresa
    this._tagsHistory = this._tagsHistory.filter ( (oldTag) => oldTag !== newTag);

    // Insertamos tag
    this._tagsHistory.unshift( newTag );

    // Solo mostramos 20
    this._tagsHistory = this._tagsHistory.splice(0, 10);

    // Llamando localStorage
    this.saveLocalStorage();

  }


  // STORAGE
  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }

  // LOAD STORAGE
  private loadLocalStorage(): void {
    if ( !localStorage.getItem('history') ) return ;
    this._tagsHistory = JSON.parse( localStorage.getItem('history')! );

    if ( this._tagsHistory.length === 0 ) return ;
    this.searchTag(this._tagsHistory[0]);
  }


  public searchTag ( tag: string ): void {
    // this._tagsHistory.unshift( tag );
    if ( tag.length === 0 ) return ;
    this.organizeTags(tag);
    console.log(this._tagsHistory);

    const params = new HttpParams()
                        .set('api_key', this.apiKey)
                        .set('q', tag)
                        .set('limit', '12');


    // this.http.get("https://api.giphy.com/v1/gifs/search?api_key=fO0UBvB0K8oV4Ayo3djKWNAp5E14oCbc&q=pokemon&limit=10")
    this.http.get<SearchResponse>(`${this.serviceUrl}/search`,{ params })
      .subscribe( resp => {
        console.log(resp.data);
        this.gifList = resp.data;
        // console.log(resp.meta);
      });
  }


}
