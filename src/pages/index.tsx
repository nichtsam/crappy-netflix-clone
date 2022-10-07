import {
  Discover,
  getActionMovies,
  getComedyMovies,
  getDocumentaries,
  getHorrorMovies,
  getRomanceMovies,
} from "@/apis/tmdb/discover";
import { getTopRated, Movie } from "@/apis/tmdb/movie";
import { getTrending, Trending } from "@/apis/tmdb/trending";
import Header from "@/components/Header";
import type { NextPage } from "next";
import Head from "next/head";

interface Props {
  trending: Trending[];
  topRated: Movie[];
  actionMovies: Discover[];
  comedyMovies: Discover[];
  horrorMovies: Discover[];
  romanceMovies: Discover[];
  documentaries: Discover[];
}

const Home: NextPage<Props> = () => {
  return (
    <div className="h-screen relative">
      <Head>
        <title>Home - Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        {/* Banner */}
        <section>
          {/* Row */}
          {/* Row */}
          {/* Row */}
          {/* Row */}
          {/* Row */}
          {/* Row */}
        </section>
      </main>
      {/* Footer */}
      {/* Modal */}
    </div>
  );
};

export const getStaticProps = async () => {
  const [
    trending,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    getTrending(),
    getTopRated(),
    getActionMovies(),
    getComedyMovies(),
    getHorrorMovies(),
    getRomanceMovies(),
    getDocumentaries(),
  ]);

  return {
    props: {
      trending,
      topRated,
      actionMovies,
      comedyMovies,
      horrorMovies,
      romanceMovies,
      documentaries,
    },
  };
};

export default Home;
