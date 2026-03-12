import { api } from "./api";

export async function getPets() {
  const response = await api.get("/pets");
  return response.data;
}