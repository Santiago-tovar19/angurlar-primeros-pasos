import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pokemon2Component } from './pokemon2.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [Pokemon2Component],
  imports: [CommonModule, MatCardModule],
  exports: [Pokemon2Component],
})
export class Pokemon2Module {}
