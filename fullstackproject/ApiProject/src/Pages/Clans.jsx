import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getClans } from "../api/ApiRoutes/Routes";
import ClanCard from "../components/ClanCard";
export default function Characters() {
  const { isFetching, data, isError, error } = useQuery({
    queryFn: getClans,
    queryKey: "clans",
  });
  if (isFetching)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading"></span>
      </div>
    );
  if (isError) return <div className="text-5xl">Clan Doesn't existe</div>;
  const characters = data.data.clan;
  console.log(clan);
  return <div className="flex gap-2.5 flex-wrap">{clans.map((clan)=>(
    <ClanCard key={clan.id} character={clan}></ClanCard>
  ))}</div>;
}