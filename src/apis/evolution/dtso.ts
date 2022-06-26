export interface Species{
  name: string;
  url: string; 
}

export interface EvolvesTo{
  is_baby: boolean;
  evolution_details: Array<EvolutionDetail>;
  species: Species;
}

export interface EvolutionDetail{
  item:null;
  trigger: Species;
  gender: null
  held_item: null;
  known_move: null;
  known_move_type: null;
  location: null;
  min_level: string;
  min_beauty: null;
  min_affection: null;
  min_happiness: null;
  party_species: null;
  needs_overworld_rain: boolean;
  relative_physical_stats: null;
  time_of_day: string;
  trade_species: null;
  turn_upside_down: boolean;
  party_type: null;
} 

export interface Chains{
  id: number; 
  species: Species;
  chain:{
    is_baby:boolean;
    name: string;
    url: string;
  }
  evolution_details: Array<EvolutionDetail>;
  evolves_to: Array<EvolvesTo>;
}


