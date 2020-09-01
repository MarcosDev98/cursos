import React from "react";
import ArtistCard from "./artist-card";

class SearchResult extends React.Component {
  state = {
    artist: [
      {
        name: "Allie X",
        match: "1",
        url: "https://www.last.fm/music/Allie+X",
        image:
          "https://img.discogs.com/5cNBaueW5MBB_j2AtLFtFm-2wPc=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-6256195-1543693969-2773.png.jpg",
      },
      {
        name: "Lorde",
        mbid: "8e494408-8620-4c6a-82c2-c2ca4a1e4f12",
        match: "0.827789",
        url: "https://www.last.fm/music/Lorde",
        image:
          "https://i.pinimg.com/originals/e8/86/72/e886724c961f72865bf4a7c66326bcfc.jpg",
      },
      {
        name: "Billie Eilish",
        match: "0.811899",
        url: "https://www.last.fm/music/Billie+Eilish",
        image:
          "https://i.pinimg.com/originals/30/a2/c6/30a2c6fcb947312b87e49ba6f0d4934c.png",
      },
      {
        name: "Marina",
        mbid: "fe0ad4d4-391b-4f43-b02f-4d2ed0ab2b5e",
        match: "0.648183",
        url: "https://www.last.fm/music/Marina",
        image:
          "https://www.famousbirthdays.com/faces/diamandis-marina-image.jpg",
      },
      {
        name: "BROODS",
        mbid: "68205c8f-9518-4b49-8df7-bd297da67599",
        match: "0.573807",
        url: "https://www.last.fm/music/BROODS",
        image:
          "https://c.ststat.net/content/entimg/tour/broods-812826843-300x300.jpg",
      },
      {
        name: "Declan Mckenna",
        match: "0.525606",
        url: "https://www.last.fm/music/Declan+Mckenna",
        image:
          "https://img.discogs.com/yD7frU561q8BFaV9wJlKsFeVD1Q=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-13195091-1549733463-7739.jpeg.jpg",
      },
      {
        name: "Susanne Sundfør",
        mbid: "f3f9e76a-0685-4a9a-97d1-6fa2b50f9fba",
        match: "0.463562",
        url: "https://www.last.fm/music/Susanne+Sundf%C3%B8r",
        image:
          "https://media.resources.festicket.com/image/300x300/center/top/filters:quality(70)/www/artists/Susanne_Sundfor_Logo.jpg",
      },
      {
        name: "iamamiwhoami",
        mbid: "9aaa99df-9383-47df-92af-8bb5e5595815",
        match: "0.457291",
        url: "https://www.last.fm/music/iamamiwhoami",
        image: "https://i.kfs.io/artist/global/207991,0v19/fit/300x300.jpg",
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            {this.state.artist.map((item, i) => {
              return <ArtistCard img={item.image} titulo={item.name} key={i} />;
            })}

            {/* <ArtistCard
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
            ></ArtistCard> */}
            <h1>{this.props.busqueda}</h1>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default SearchResult;
