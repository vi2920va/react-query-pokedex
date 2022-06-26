import { Pokemon } from "../pokemon/dtos";

export interface ResourceList{
  count: number;
  next: string;
  previous: null;
  results: Array<Pokemon>;
}