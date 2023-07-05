import { Paginator } from './paginator';

export interface Pokemon {
  name: string;
  url: string;
}

export interface PaginatedPokemons extends Paginator {
  results: Pokemon[];
}
