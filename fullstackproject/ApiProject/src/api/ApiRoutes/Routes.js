import { apiConfig } from "../AxiosConfig";

export async function getCharacters() {
  return apiConfig.get("/character");
}

export async function getCharacterByName(name) {
  return apiConfig.get("/character/search?name=" + name);
}
export async function getTeams(TeamId) {
  return apiConfig.get("/Routes/Teams", TeamId);
}
export async function getClans(ClanId) {
  return apiConfig.get("/Routes/Clans", ClanId);
}
export async function getVillages(VillageId) {
  return apiConfig.get("/Routes/Clans", VillageId);
}
