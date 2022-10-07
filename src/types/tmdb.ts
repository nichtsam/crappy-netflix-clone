import { Discover } from "@/apis/tmdb/discover";
import { Movie } from "@/apis/tmdb/movie";
import { Trending } from "@/apis/tmdb/trending";

export type GeneralMovie = Trending | Discover | Movie;
