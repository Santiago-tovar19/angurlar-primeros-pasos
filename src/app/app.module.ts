import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { EstudiantesModule } from './estudiantes/estudiantes.module';
import { Pokemon2Module } from './pokemon2/pokemon2.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, CounterComponent],
  imports: [BrowserModule, EstudiantesModule, Pokemon2Module, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
