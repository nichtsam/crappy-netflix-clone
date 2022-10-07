import { Nullish, Optional } from "@/types/utils";
import { TMDB_API_KEY, axios_tmdb } from "./constant";

type MovieResponse = { results: Movie[] };

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

export const getTopRated = async () =>
  (
    await axios_tmdb.get<MovieResponse>(
      `movie/top_rated?api_key=${TMDB_API_KEY}&language=en-US`
    )
  ).data.results;
