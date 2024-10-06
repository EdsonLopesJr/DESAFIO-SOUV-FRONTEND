import axios from "axios";

export const Api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3333",
});
