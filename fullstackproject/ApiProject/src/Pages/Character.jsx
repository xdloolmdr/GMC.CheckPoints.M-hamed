import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { getCharacterByName } from "../api/ApiRoutes/Routes";
import { div } from "prelude-ls";

export default function Character() {
  const { name } = useParams();
  const { isFetching, data, error, isError } = useQuery({
    queryFn: () => getCharacterByName(name),
    queryKey: [name, "character"],
  });
  if (isFetching)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading"></span>
      </div>
    );
  if (isError)
    return (
      <div className="text-5xl">
        can't find any ainfos about this character {name}
      </div>
    );
  const character = data.data;
  return (
    <div>
      <h1>{character.name}</h1>
      {character.jutsu?.map((j) => (
        <span key={j} className="badge badge-primary flex flex-row">
          {j}
        </span>
      ))}
      <div>
        <h4>Debuts</h4>
        {character.debut.appearsIn.split(", ").map((aIn) => (
          <p key={aIn}>{character.debut[aIn.toLowerCase()]}</p>
        ))}
      </div>
      <div>
        {character.natureType.map((naT) => (
          <span key={naT}>{naT}</span>
        ))}
      </div>
      <div>
        {Object.entries(character.family).map(([key, value]) => (
          <p key={key}>
            {key} : {value}
          </p>
        ))}
      </div>
      <div>
      <p>{character.personal.status}</p>
      <p>{character.personal.kekkeiGenkai}</p>
      <p>{character.personal.classification}</p>
      <p>{character.personal.jinchūriki}</p>
      <p>{character.personal.titles}</p>
      </div>
      <div>{character.uniqueTraits}</div>
    </div>
  );
}
