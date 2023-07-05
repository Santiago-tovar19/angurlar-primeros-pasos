import { Component, OnInit } from '@angular/core';
import { PokemonService } from './service/pokemon.service';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  pokemons: any = [];

  constructor(
    public _pokemonService: PokemonService
  ){

  }

  ngOnInit(): void {
    this._pokemonService.getList().subscribe((response: any) => {
      this.pokemons = response.results;
      console.log(this.pokemons)
    })
  }

}
