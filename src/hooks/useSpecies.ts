import axios, { AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { SpeciesResponse } from "../apis/resourceList/dtos";

const fetchSpecies = (id?: string) =>
  axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`);

const useSpeciesQuery = (id?: string) =>
  useQuery<AxiosResponse<SpeciesResponse>, Error>(["species", { id }], () =>
    fetchSpecies(id)
  );

export default useSpeciesQuery;
