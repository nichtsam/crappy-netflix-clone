import {
  Discover,
  getActionMovies,
  getComedyMovies,
  getDocumentaries,
  getHorrorMovies,
  getNetflixOriginals,
  getRomanceMovies,
} from "@/apis/tmdb/discover";
import { getTopRated, Movie } from "@/apis/tmdb/movie";
import { getTrending, Trending } from "@/apis/tmdb/trending";
import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Series from "@/components/Series";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";

interface Props {
  netflixOriginals: Discover[];
  trending: Trending[];
  topRated: Movie[];
  actionMovies: Discover[];
  comedyMovies: Discover[];
  horrorMovies: Discover[];
  romanceMovies: Discover[];
  documentaries: Discover[];
}

const Home: NextPage<Props> = ({
  netflixOriginals,
  trending,
  topRated,
  actionMovies,
  comedyMovies,
  horrorMovies,
  romanceMovies,
  documentaries,
}) => {
  return (
    <div className="h-screen relative">
      <Head>
        <title>Home - Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Banner series={netflixOriginals} />
        <section>
          <Series title="Trending" series={trending} />
          <Series title="TopRated" series={topRated} />
          <Series title="ActionMovies" series={actionMovies} />
          <Series title="ComedyMovies" series={comedyMovies} />
          <Series title="HorrorMovies" series={horrorMovies} />
          <Series title="RomanceMovies" series={romanceMovies} />
          <Series title="Documentaries" series={documentaries} />
        </section>
      </main>
      {/* Footer */}
      {/* Modal */}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const [
    netflixOriginals,
    trending,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    getNetflixOriginals(),
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
      netflixOriginals,
      trending,
      topRated,
      actionMovies,
      comedyMovies,
      horrorMovies,
      romanceMovies,
      documentaries,
    },
    revalidate: 60 * 60, // seconds
  };
};

export default Home;
