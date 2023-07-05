import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    public _httpClient: HttpClient
  ) { }


  getList() {
    return this._httpClient.get('https://pokeapi.co/api/v2/ability/?limit=20&offset=20')
  }


}
