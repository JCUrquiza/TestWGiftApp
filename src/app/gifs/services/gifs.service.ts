import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({ providedIn: 'root' })
export class GifsService {

  public gifsList: Gif[] = [];
  private _tagsHistory: string[] = [];
  private apiKey: string = 'iWQSlaDJLDehsV2OEbH2WVNDN3QyNq9Y';
  private serviceURL: string = 'https://api.giphy.com/v1/gifs';

  constructor( private http: HttpClient ) {
    this.loadLocalStorage();
  }

  get tagsHistory() {
    return [...this._tagsHistory]
  }

  private organizeHistory(tag: string) {
    // El tag se pasa a miníscula
    tag = tag.toLowerCase();
    // Si el tag ya está en el arreglo, entonces eliminarlo
    if ( this._tagsHistory.includes(tag) ) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    } else {
      if ( this._tagsHistory.length >= 10 ) return;
    }
    // Para insertar el tag al inicio del arreglo
    this._tagsHistory.unshift( tag );
    // Y limitar el arreglo a 10 elementos
    // this._tagsHistory = this.tagsHistory.splice(1, 10);
    this.saveLocalStorage();
  }

  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }

  private loadLocalStorage(): void {
    if ( !localStorage.getItem('history') ) return;
    this._tagsHistory = JSON.parse(localStorage.getItem('history')!);
  }

  searchTag( tag: string ):void {
    if ( tag.length === 0 ) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', tag)

    this.http.get<SearchResponse>(`${ this.serviceURL }/search`, { params: params })
      .subscribe( respuesta => {
        console.log(respuesta);
        this.gifsList = respuesta.data;
      });

  }

}
