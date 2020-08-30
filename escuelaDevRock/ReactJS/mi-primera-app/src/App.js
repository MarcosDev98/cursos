import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ArtistCard from "./components/artist-card";
import SearchBar from "./components/search-bar";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <React.Fragment>
      <SearchBar></SearchBar>
      <div className="container">
        <div className="row">
          <ArtistCard
            img="https://img.discogs.com/C0yIaStm5NWF-u4_z3ftK_lONDs=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-573388-1379265270-2318.jpeg.jpg"
            titulo="Iron Maiden"
          >
            {" "}
          </ArtistCard>
          <ArtistCard
            img="https://mariskalrock.com/wp-content/uploads/2018/11/dream-theater-scenes-memory.jpg"
            titulo="Dream Theaterr"
          ></ArtistCard>
          <ArtistCard
            img="https://www.humonegro.com/wp-content/SLAYER-REIGN-IN-BLOOD-BIG-560x600.png"
            titulo="Slayer"
          ></ArtistCard>
          <ArtistCard
            img="https://hotrockin.files.wordpress.com/2017/05/ff.jpg"
            titulo="Fear Factory"
          ></ArtistCard>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
