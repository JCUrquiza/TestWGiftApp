import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-cart-list',
  templateUrl: './cart-list.component.html',
})
export class CartListComponent {

  @Input()
  public gifs: Gif[] = [];

  public tag: string = '';

  constructor( public gifsService: GifsService ) {
    if (JSON.parse(localStorage.getItem('history')!)) {
      this.tag = JSON.parse(localStorage.getItem('history')!)[0];
      this.showFirstGifOfHostory(this.tag);
    }
  }

  showFirstGifOfHostory(tag: string) {
    this.gifsService.searchTag(tag);
  }

}
