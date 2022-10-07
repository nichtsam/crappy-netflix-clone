import { Nullish, Optional } from "@/types/utils";
import { TMDB_API_KEY, axios_tmdb } from "./constant";

type TrendingResponse = { results: Trending[] };

export type Trending = {
  id: Optional<number>;
  title: Optional<string>;
  name: Optional<string>;
  overview: Optional<string>;
  video: Optional<boolean>;
  adult: Optional<boolean>;
  popularity: Optional<number>;
  release_date: Optional<string>;
  first_air_date: Optional<string>;
  original_name: Optional<string>;
  origin_country: Optional<string[]>;
  original_title: Optional<string>;
  original_language: Optional<string>;
  genre_ids: Optional<number[]>;
  vote_average: Optional<number>;
  vote_count: Optional<number>;
  backdrop_path: Nullish<string>;
  poster_path: Nullish<string>;
};

export const getTrending = async () =>
  (
    await axios_tmdb.get<TrendingResponse>(
      `trending/all/week?api_key=${TMDB_API_KEY}&language=en-US`
    )
  ).data.results;
