import axios from "axios";

export const TMDB_BASE_URL = "https://api.themoviedb.org/3";
export const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
export const TMDB_API_KEY = process.env.TMDB_API_KEY;
export const axios_tmdb = axios.create({ baseURL: TMDB_BASE_URL });
