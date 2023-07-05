import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CounterModule } from './counter/counter.module';
import { PokemonModule } from './pokemon/pokemon.module';
import { HttpClientModule } from '@angular/common/http';
import { FormulariosModule } from './formularios/formularios.module';
import { Route, RouterModule } from '@angular/router';
import { PokemonComponent } from './pokemon/pokemon.component';
import { FormulariosComponent } from './formularios/formularios.component';


const routes: Route[] = [
  {
    path: 'pokemon',
    // loadChildren: () => import('./pokemon/pokemon.module').then(m => m.PokemonModule)
    component: PokemonComponent
  },
  {
    path: 'formularios',
    component: FormulariosComponent
  }
]


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    CounterModule,
    PokemonModule,
    FormulariosModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
