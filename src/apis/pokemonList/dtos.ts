import { Pokemon } from "../pokemon/dtos";

export interface PokemonList {
  count: number;
  results: Array<Pokemon>;
}
