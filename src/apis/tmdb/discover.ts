import { Nullish, Optional } from "@/types/utils";
import { TMDB_API_KEY, axios_tmdb } from "./constant";

type DiscoverResponse = { results: Discover[] };

export type Discover = {
  id: Optional<number>;
  name: Optional<string>;
  title: Optional<string>;
  overview: Optional<string>;
  video: Optional<boolean>;
  adult: Optional<boolean>;
  popularity: Optional<number>;
  release_date: Optional<string>;
  original_title: Optional<string>;
  original_language: Optional<string>;
  genre_ids: Optional<number[]>;
  vote_average: Optional<number>;
  vote_count: Optional<number>;
  backdrop_path: Nullish<string>;
  poster_path: Nullish<string>;
};

export const getNetflixOriginals = async () =>
  (
    await axios_tmdb.get<DiscoverResponse>(
      `discover/tv?api_key=${TMDB_API_KEY}&language=en-US&with_networks=213`
    )
  ).data.results;

export const getActionMovies = async () =>
  (
    await axios_tmdb.get<DiscoverResponse>(
      `discover/movie?api_key=${TMDB_API_KEY}&language=en-US&with_genres=28`
    )
  ).data.results;

export const getComedyMovies = async () =>
  (
    await axios_tmdb.get<DiscoverResponse>(
      `discover/movie?api_key=${TMDB_API_KEY}&language=en-US&with_genres=35`
    )
  ).data.results;

export const getHorrorMovies = async () =>
  (
    await axios_tmdb.get<DiscoverResponse>(
      `discover/movie?api_key=${TMDB_API_KEY}&language=en-US&with_genres=27`
    )
  ).data.results;

export const getRomanceMovies = async () =>
  (
    await axios_tmdb.get<DiscoverResponse>(
      `discover/movie?api_key=${TMDB_API_KEY}&language=en-US&with_genres=10749`
    )
  ).data.results;

export const getDocumentaries = async () =>
  (
    await axios_tmdb.get<DiscoverResponse>(
      `discover/movie?api_key=${TMDB_API_KEY}&language=en-US&with_genres=99`
    )
  ).data.results;
