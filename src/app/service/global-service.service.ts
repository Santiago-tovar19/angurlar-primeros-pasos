import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalServiceService {
  nombre: string = 'SANTIAGO';

  constructor() {}
}
