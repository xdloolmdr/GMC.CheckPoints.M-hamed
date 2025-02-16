import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getCharacters } from "../api/ApiRoutes/Routes";
import CharacterCard from "../components/CharacterCard";
export default function Characters() {
  const { isFetching, data, isError, error } = useQuery({
    queryFn: getCharacters,
    queryKey: "characters",
  });
  if (isFetching)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading"></span>
      </div>
    );
  if (isError) return <div className="text-5xl">Character Doesn't existe</div>;
  const characters = data.data.characters;
  console.log(characters);
  return <div className="flex gap-2.5 flex-wrap">{characters.map((character)=>(
    <CharacterCard key={character.id} character={character}></CharacterCard>
  ))}</div>;
}
