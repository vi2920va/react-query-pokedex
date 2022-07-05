import React from "react";
import PokemonList from "../../components/PokemonList";
import * as Styled from "./styles";

const IndexPage: React.FC = () => {
  return (
    <Styled.Container>
      <Styled.Title>Pokédex</Styled.Title>
      <Styled.Description>
        The Pokédex contains detailed stats for every creature from the Pokémon
        games.
      </Styled.Description>
       <PokemonList /> 
      <Styled.ImageWrapper>
        <Styled.Image src="/assets/pocketball.svg" />
      </Styled.ImageWrapper>
    </Styled.Container>
  );
};

export default IndexPage;
