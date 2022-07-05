import React from 'react';
import * as Styled from "./styles";

interface PokenmonItemProps{
  pokemon: any;
}
const getImageUrl = (pokemonIndex: number): string =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`

const formatNumbering = (pokemonIndex: number | string): string =>
  `#${(typeof pokemonIndex === 'number' ? String(pokemonIndex) : pokemonIndex).padStart(3, '0')}`

const PokenmonItem: React.FC<PokenmonItemProps> = ({ pokemon }) => {
  return (
    <Styled.Item>
      <Styled.Img src={getImageUrl(1)} alt="bulbasaur"/>
      <Styled.Name>bulbasaur</Styled.Name>
      <Styled.Index>{formatNumbering(1)}</Styled.Index>
    </Styled.Item>
  )
}


export default PokenmonItem;