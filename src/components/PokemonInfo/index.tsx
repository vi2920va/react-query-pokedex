import React from "react";
import { Color, Type } from "../../apis/ditto/dtos";
import { formatNumbering, mapColorToHex } from "../../utils";
import * as Styled from "./styles";
import { mapTypeToHex } from "../../utils/index";

interface PokemonInfoProps {
  id?: string;
  name?: string;
  types?: Array<Type>;
  color?: Color;
}
const PokemonInfo: React.FC<PokemonInfoProps> = ({
  id,
  name,
  types,
  color,
}) => {
  return (
    <Styled.Base color={mapColorToHex(color?.name)}>
      <Styled.ImageWrapper>
        <Styled.Image src="/assets/pocketball.svg" />
      </Styled.ImageWrapper>
      <Styled.InfoWrapper>
        <Styled.Name>{name}</Styled.Name>
        {id && <Styled.Index>{formatNumbering(id)}</Styled.Index>}
      </Styled.InfoWrapper>
      {types && (
        <Styled.TypeList>
          {types.map(({ type }, idx) => (
            <Styled.TypeWrapper key={idx} color={mapTypeToHex(type.name)}>
              <Styled.TypeInfo src={`/assets/${type.name}.svg`} />
            </Styled.TypeWrapper>
          ))}
        </Styled.TypeList>
      )}
      <Styled.ThumbnailImage>
        <Styled.ThumbnailImage
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          alt="image"
        />
      </Styled.ThumbnailImage>
    </Styled.Base>
  );
};

export default PokemonInfo;
