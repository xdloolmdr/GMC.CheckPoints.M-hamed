import axios from "axios";

//baseUrl="https://api.rsc.org/compounds/v1"
export const apiConfig = axios.create({
  baseURL: "https://narutodb.xyz/api",
  headers: { Accept: "application/json" },
});
