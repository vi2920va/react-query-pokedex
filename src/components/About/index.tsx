import React from "react";
import { Ability, Color, Type } from "../../apis/ditto/dtos";
import { mapTypeToHex } from "../../utils";
import PokedexData from "../PokedexData";
import * as Styled from "./styles";

interface AboutProps {
  isLoading?: boolean;
  color?: Color;
  growthRate?: string;
  flavorText?: string;
  genderRate?: number;
  isLegendary?: boolean;
  isMythical?: boolean;
  types?: Array<Type>;
  weight?: number;
  height?: number;
  baseExp?: number;
  abilities?: Array<Ability>;
}

const About: React.FC<AboutProps> = ({
  isLoading,
  isMythical,
  isLegendary,
  types,
  weight,
  flavorText,
  growthRate,
  genderRate,
  color,
  height,
  baseExp,
  abilities,
}) => {
  const rarity = isLegendary ? "Legendary" : isMythical ? "Mythical" : "Normal";

  return (
    <Styled.Base>
      <Styled.FlavorText>{flavorText}</Styled.FlavorText>
      {isLoading ? (
        <Styled.ImageWrapper>
          <Styled.Image src="/loading.gif" />
        </Styled.ImageWrapper>
      ) : (
        <>
          {types && (
            <Styled.TypeList>
              {types.map(({ type }, idx) => (
                <Styled.TypeWrapper key={idx} color={mapTypeToHex(type.name)}>
                  <Styled.TypeImage src={`/assets/${type.name}.svg`} />
                  <Styled.TypeLabel>{type.name.toUpperCase()}</Styled.TypeLabel>
                </Styled.TypeWrapper>
              ))}
            </Styled.TypeList>
          )}
          <PokedexData
            weight={weight}
            height={height}
            genderRate={genderRate}
            growthRate={growthRate}
            baseExp={baseExp}
            rarity={rarity}
            color={color}
          />
          {/* {abilities && <Abilities abilities={abilities} color={color} />} */}
        </>
      )}
    </Styled.Base>
  );
};
export default About;
