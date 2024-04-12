import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { GifsCardComponent } from './components/gifs-card/gifs-card.component';


@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    CartListComponent,
    GifsCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class GifsModule { }
