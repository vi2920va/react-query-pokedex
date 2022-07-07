import React from 'react';
import { formatNumbering } from '../../utils/colors';
import * as Styled from "./styles";

interface PokenmonItemProps{
  pokemon: any;
  onClick :()=>void;
  idx:number;
}
const getImageUrl = (pokemonIndex: number): string =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`

const PokenmonItem: React.FC<PokenmonItemProps> = ({ pokemon, idx }) => {
  return (
    <Styled.Item>
      <Styled.Img src={getImageUrl(idx + 1)} alt="bulbasaur"/>
      <Styled.Name>{pokemon.name}</Styled.Name>
      <Styled.Index>{formatNumbering(idx + 1)}</Styled.Index>
    </Styled.Item>
  )
}


export default PokenmonItem;