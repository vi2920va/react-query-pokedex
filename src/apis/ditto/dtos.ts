
export interface Sprites  {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
  other: {
    dream_world: {
      front_default: string;
    }
    'official-artwork': {
      front_default: string;
    }
  }
}


export interface Stat  {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  }
}

export interface Type{
  slot: number;
  type:{
    name:string;
    url: string;
  } 
}

export interface Ability{
  ability:{
    name:string;
    url:string;
  }
  is_hidden: boolean;
  slot: number;
}

export interface Language{
  name:string;
  url:string;
}

export interface Color{
  name:string;
  url: string;
}


export interface Version{
  name:string;
  url: string;
}

export interface FlavorTextEntry  {
  flavor_text: string;
  language: Language;
  version: Version;
}

export interface Name {
  language: Language;
  name: string;
}

export interface GrowthRate {
  name: string;
  url: string;
}

export interface EffectEntry {
  effect: string;
  language:Language;
  short_effect:string;
}

export interface SimplePokemonInfo {
  name:string
  url: string;
}


export interface DamageRelation {
  double_damage_from: Array<{ name: string, url: string }>;
  double_damage_to: Array<{ name: string, url: string }>;
  half_damage_from: Array<{ name: string, url: string }>;
  half_damage_to: Array<{ name: string, url: string }>;
}

