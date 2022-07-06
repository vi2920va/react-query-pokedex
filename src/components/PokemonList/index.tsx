import React from "react";
import { PokemonList as list } from "../../apis/pokemonList/dtos";
import usePokemonQuery from "../../hooks/usePokemonQuery";
import PokenmonItem from "../PokemonItem";
import * as Styled from "./styles";

const PokemonList: React.FC = () => {
  const { isLoading, isError, data } = usePokemonQuery<list>();
  return (
    <Styled.Wrapper>
      {isLoading || isError ? (
        <img src="/loading.gif" alt="loading" />
      ) : (
        <Styled.List>
          {data?.data.results.map((pokemon, idx) => (
            <PokenmonItem key={idx} pokemon={pokemon} />
          ))}
        </Styled.List>
      )}
    </Styled.Wrapper>
  );
};

export default PokemonList;
