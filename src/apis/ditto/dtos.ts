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



