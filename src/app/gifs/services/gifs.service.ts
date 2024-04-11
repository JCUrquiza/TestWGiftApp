import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class GifsService {

  private _tagsHistory: string[] = [];
  private apiKey: string = 'umXO25VzbLQZSu448xHAdqiF34HqO7uh';
  private serviceURL: string = 'https://api.giphy.com/v1/gifs';

  constructor( private http: HttpClient ) {}

  get tagsHistory() {
    return [...this._tagsHistory]
  }

  private organizeHistory(tag: string) {
    // El tag se pasa a miníscula
    tag = tag.toLowerCase();
    // Si el tag ya está en el arreglo, entonces eliminarlo
    if ( this._tagsHistory.includes(tag) ) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }
    // Para insertar el tag al inicio del arreglo
    this._tagsHistory.unshift( tag );
    // Y limitar el arreglo a 10 elementos
    this._tagsHistory = this._tagsHistory.splice(1, 10);
  }

  searchTag( tag: string ):void {
    if ( tag.length === 0 ) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', tag)

    this.http.get(`${ this.serviceURL }/search`, { params: params })
      .subscribe( data => {
        console.log(data);
      });

  }

}
