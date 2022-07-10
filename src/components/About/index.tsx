import React from "react";
import { Ability, Color, Type } from "../../apis/ditto/dtos";

interface AboutProps {
  isLoaging: boolean;
  color?: Color;
  xgrowthRate?: string;
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

const About: React.FC<AboutProps> = () => {
  return <div>index</div>;
};
