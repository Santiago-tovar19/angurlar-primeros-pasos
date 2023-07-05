import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonComponent } from './pokemon.component';
import { Route, RouterModule } from '@angular/router';


// const route: Route[] = [
//   {
//     path: '',
//     component: PokemonComponent
//   }
// ]

@NgModule({
  declarations: [
    PokemonComponent
  ],
  imports: [
    CommonModule,
    // RouterModule.forChild(route)
  ],
  exports: [
    PokemonComponent
  ]
})
export class PokemonModule { }
