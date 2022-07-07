import React from "react";
import { useNavigate } from "react-router-dom";
import { PokemonList as list } from "../../apis/pokemonList/dtos";
import usePokemonQuery from "../../hooks/usePokemonQuery";
import PokenmonItem from "../PokemonItem";
import * as Styled from "./styles";

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
            <PokenmonItem key={idx} idx={idx} pokemon={pokemon} onClick={()=> navigate(`/${idx + 1}`)} />
          ))}
        </Styled.List>
      )}
    </Styled.Wrapper>
  );
};

export default PokemonList;
