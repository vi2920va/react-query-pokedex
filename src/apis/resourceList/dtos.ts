import { Pokemon } from "../pokemon/dtos";
import { Sprites, Stat, Ability, Type, Name, FlavorTextEntry, Color, GrowthRate, EffectEntry, DamageRelation} from "../ditto/dtos";
import { Chain } from "../evolution/dtso";


export interface ResourceList{
  count: number;
  next: string;
  previous: null;
  results: Array<Pokemon>;
}


export interface PokemonResponse {
  id: number;
  name: string;
  order: number;
  sprites: Sprites;
  base_experience: number;
  height: number;
  weight: number;
  stats: Array<Stat>;
  abilities: Array<Ability>;
  types: Array<Type>;
}

export interface SpeciesResponse  {
  id: number;
  name: string;
  order: number;
  names: Array<Name>;
  color: Color;
  flavor_text_entries: Array<FlavorTextEntry>;
  growth_rate: GrowthRate;
  gender_rate: number;
  is_legendary: boolean;
  is_mythical: boolean;
  evolution_chain: {
    url: string;
  }
}

export interface AbilityResponse {
  id: number;
  name: string;
  names: Array<Name>;
  is_main_series: boolean;
  effect_entries: Array<EffectEntry>;
}

export interface TypeResponse{
  id:number;
  name:string;
  damage_relations: DamageRelation;
}

export interface EvolutionChainResponse {
  id: number;
  chain: Chain;
}