import { Nullish, Optional } from "@/types/utils";
import { TMDB_BASE_URL, TMDB_API_KEY } from "./constant";

export type Discover = {
  id: Optional<number>;
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

export const getNetflixOriginals = (): Promise<Discover> =>
  fetch(
    new URL(
      `3/discover/tv?api_key=${TMDB_API_KEY}&language=en-US&with_networks=213`,
      TMDB_BASE_URL
    )
  )
    .then((res) => res.json())
    .then((res) => res.results);

export const getActionMovies = (): Promise<Discover> =>
  fetch(
    new URL(
      `3/discover/movie?api_key=${TMDB_API_KEY}&language=en-US&with_genres=28`,
      TMDB_BASE_URL
    )
  )
    .then((res) => res.json())
    .then((res) => res.results);

export const getComedyMovies = (): Promise<Discover> =>
  fetch(
    new URL(
      `3/discover/movie?api_key=${TMDB_API_KEY}&language=en-US&with_genres=35`,
      TMDB_BASE_URL
    )
  )
    .then((res) => res.json())
    .then((res) => res.results);

export const getHorrorMovies = (): Promise<Discover> =>
  fetch(
    new URL(
      `3/discover/movie?api_key=${TMDB_API_KEY}&language=en-US&with_genres=27`,
      TMDB_BASE_URL
    )
  )
    .then((res) => res.json())
    .then((res) => res.results);

export const getRomanceMovies = (): Promise<Discover> =>
  fetch(
    new URL(
      `3/discover/movie?api_key=${TMDB_API_KEY}&language=en-US&with_genres=10749`,
      TMDB_BASE_URL
    )
  )
    .then((res) => res.json())
    .then((res) => res.results);

export const getDocumentaries = (): Promise<Discover> =>
  fetch(
    new URL(
      `3/discover/movie?api_key=${TMDB_API_KEY}&language=en-US&with_genres=99`,
      TMDB_BASE_URL
    )
  )
    .then((res) => res.json())
    .then((res) => res.results);
