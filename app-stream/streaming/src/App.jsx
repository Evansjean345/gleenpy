import "./dist/output.css";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./api/ScrollToTop";
import Loader from "./Loader";
/////////////////////////////////////////////
import Home from "./routes/Home";
import About from "./routes/About";
import GagHome from "./routes/GagHome";
import DirectHome from "./routes/DirectHome";
import TvHome from "./routes/TvHome";
import MusicHome from "./routes/MusicHome";

import HomeMovies from "./routes/HomeMovies";

//Gag routes
/////////////////////
import Bottle from "./gag/TheBottle";
import Gag from "./routes/Gag";
import Shoes from "./gag/Shoes";
import Poisse from "./gag/Poisse";
import Dog from "./gag/Dog";
import Rire from "./gag/Rire";
import Oeuf from "./gag/Oeuf";
import Qui from "./gag/Qui";
///partagez le direct routing/////////////////////////////
import Share from "./share/Share";
import Makosso from "./share/Makosso";
import Apoutchou from "./share/Apoutchou";
import Hamond from "./share/Hamond";
import Lohoues from "./share/Lohoues";
///////comedie routing////
import Tv from "./tv/Tv";
import Impact from "./tv/Impact";
import Battement from "./tv/Battement";
import School from "./tv/School";

import LyricsHome from "./routes/LyricsHome";
import Kodja from "./parole/Kodja";
import Lyrics from "./parole/Lyrics";
import Gedeon from "./parole/Gedeon";
import Bishop from "./parole/Bishop";
import Tunasi from "./parole/Tunasi";
import Sanogo from "./parole/Sanogo";

import MooviesHomeComponent from "./movies/MooviesHomeComponent";
import SeriesHomeComponent from "./series/SeriesHomeComponent";
import EpisodesHomeComponent from "./episodes/EpisodesHomeComponent";
import SongTitleComponent from "./songTitles/SongTitleComponent";
import Login from "./routes/Login";
import Signup from "./routes/Signup";
//context
import { AuthContext } from "./services/account.service";
import { AuthProvider } from "./services/account.service";
import { useEffect, useState, useContext, useRef } from "react";
import Profile from "./layout/Profile";
import Pay from "./layout/Pay";

function App() {
  const [loader, setLoader] = useState(true);
  const { login, isAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);

  return loader ? (
    <div className="p-0 m-0 flex items-center justify-center w-full h-[100vh] bg-black cd">
      <Loader />
    </div>
  ) : (
    <div className="App p-0 m-0 h-[100vh] bg-black">
      <ScrollToTop />
      <Routes>
        {/*Navigation */}
        <Route path="/" element={<Home />} />
        {/*MoviesHomes */}
        <Route path="/moviesHome" element={<HomeMovies />} />
        <Route path="/mooviesHome/:id" element={<MooviesHomeComponent />} />
        <Route
          path="/seriesHome/:id/details"
          element={<SeriesHomeComponent />}
        />
        <Route
          path="/episodeHome/:serieId/seasons/:seasonId/episodes"
          element={<EpisodesHomeComponent />}
        />
        <Route path="/songs/:id/details" element={<SongTitleComponent />} />
        {/*routes For music */}
        <Route path="/musicsHome" element={<MusicHome />} />
        {/*Gag Home */}
        <Route path="/gagHome" element={<GagHome />} />
        {/* GAG nested Routes*/}
        <Route path="/gag" element={<Gag />}>
          <Route path="/gag/bottle" element={<Bottle />} />
          <Route path="/gag/shoes" element={<Shoes />} />
          <Route path="/gag/poisse" element={<Poisse />} />
          <Route path="/gag/dog" element={<Dog />} />
          <Route path="/gag/rire" element={<Rire />} />
          <Route path="/gag/oeuf" element={<Oeuf />} />
          <Route path="/gag/qui" element={<Qui />} />
        </Route>
        {/*Share Live Home */}
        <Route path="/directHome" element={<DirectHome />} />
        {/*Share Live Nested Routes*/}
        <Route path="/share" element={<Share />}>
          <Route path="/share/makosso" element={<Makosso />} />
          <Route path="/share/apoutchou" element={<Apoutchou />} />
          <Route path="/share/hamond" element={<Hamond />} />
          <Route path="/share/lohoues" element={<Lohoues />} />
        </Route>
        {/* Tv Home */}
        <Route path="/tvHome" element={<TvHome />} />
        {/* Tv nested Routes */}
        <Route path="/tv" element={<Tv />}>
          <Route path="/tv/impact" element={<Impact />} />
          <Route path="/tv/battement" element={<Battement />} />
          <Route path="/tv/school" element={<School />} />
        </Route>
        {/* Paroles de Vie */}
        <Route path="/lyricsHome" element={<LyricsHome />} />
        {/* Paroles de Vie Nested Routes */}
        <Route path="/lyrics" element={<Lyrics />}>
          <Route path="/lyrics/kodja" element={<Kodja />} />
          <Route path="/lyrics/gede" element={<Gedeon />} />
          <Route path="/lyrics/bishop" element={<Bishop />} />
          <Route path="/lyrics/tunasi" element={<Tunasi />} />
          <Route path="/lyrics/sanogo" element={<Sanogo />} />
        </Route>
        {/* About */}
        <Route path="/abouts" element={<About />} />
        {/* Login */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        {/*Profile and abonnement section */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/pay" element={<Pay />} />
      </Routes>
    </div>
  );
}

function WrappedApp() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}

export default WrappedApp;
