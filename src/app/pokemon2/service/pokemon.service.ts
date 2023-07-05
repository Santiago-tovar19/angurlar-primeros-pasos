import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PaginatedPokemons } from 'src/app/interfaces/entities/pokemon.interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(public _httpClient: HttpClient) {}

  getList(): Observable<PaginatedPokemons> {
    return this._httpClient.get<PaginatedPokemons>(
      'https://pokeapi.co/api/v2/ability/?limit=20&offset=20'
    );
  }
}
type Direccion = {
  calle: string;
  casa: number;
  country: String;
};

type Persona = {
  cabeza: string | null;
  nombre: 'Jose' | 'Juan';
  edad: number;
  casado: boolean | 0 | 1;
  direccion?: Direccion;
};

const santiago: Persona = {
  cabeza: null,
  nombre: 'Jose',
  casado: 0,
  edad: 18,
  direccion: {
    calle: 'okey',
    casa: 45,
    country: 'las vegas',
  },
};
