import React from "react";
import { useNavigate } from "react-router-dom";
import { PokemonList as list } from "../../apis/pokemonList/dtos";
import usePokemonQuery from "../../hooks/usePokemonQuery";
import { formatNumbering } from "../../utils";
import * as Styled from "./styles";
const getImageUrl = (pokemonIndex: number): string =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`;
const PokemonList: React.FC = () => {
  const { isLoading, isError, data } = usePokemonQuery<list>();
  const navigate = useNavigate();

  return (
    <Styled.Wrapper>
      {isLoading || isError ? (
        <img src="/loading.gif" alt="loading" />
      ) : (
        <Styled.List>
          {data?.data.results.map((pokemon, idx) => (
            <Styled.ListItem key={idx} onClick={() => navigate(`/${idx + 1}`)}>
              <Styled.Image src={getImageUrl(idx + 1)} alt={pokemon.name} />
              <Styled.Name>{pokemon.name}</Styled.Name>
              <Styled.Index>{formatNumbering(idx + 1)}</Styled.Index>
            </Styled.ListItem>
          ))}
        </Styled.List>
      )}
    </Styled.Wrapper>
  );
};

export default PokemonList;
