import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
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
    CommonModule,
    SharedModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class GifsModule { }
