import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [CounterComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatInputModule
  ],
  exports: [CounterComponent]
})
export class CounterModule { }
