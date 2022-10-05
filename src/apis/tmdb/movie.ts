import { Nullish, Optional } from "@/types/utils";
import { TMDB_BASE_URL, TMDB_API_KEY } from "./constant";

export type Movie = {
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

export const getTopRated = (): Promise<Movie> =>
  fetch(
    new URL(
      `3/movie/top_rated?api_key=${TMDB_API_KEY}&language=en-US`,
      TMDB_BASE_URL
    )
  )
    .then((res) => res.json())
    .then((res) => res.results);
