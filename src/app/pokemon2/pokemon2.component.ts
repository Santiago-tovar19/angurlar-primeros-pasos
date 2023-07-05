import { Component, OnInit } from '@angular/core';
import { PokemonService } from './service/pokemon.service';
import { PaginatedPokemons } from '../interfaces/entities/pokemon.interfaces';

@Component({
  selector: 'app-pokemon2',
  templateUrl: './pokemon2.component.html',
  styleUrls: ['./pokemon2.component.css'],
})
export class Pokemon2Component implements OnInit {
  pokemons3: PaginatedPokemons | undefined;

  constructor(public _pokemonService: PokemonService) {}

  ngOnInit(): void {
    this._pokemonService.getList().subscribe((response: PaginatedPokemons) => {
      this.pokemons3 = response;
      const name = 'holis';
      this.pokemons3.results[0].name = name;
    });
  }
}
