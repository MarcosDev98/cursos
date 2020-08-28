import React from "react";
import "./artist-card.css";
const styles = {
  p: {
    color: "red",
    fontSize: "30px",
  },
};

class ArtistCard extends React.Component {
  render() {
    return (
      <div>
        <div className="item">
          <img
            src="https://img.discogs.com/C0yIaStm5NWF-u4_z3ftK_lONDs=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-573388-1379265270-2318.jpeg.jpg"
            alt="Logo AC/DC"
            className="pic"
          />

          <p className="titulo">Iron Maiden</p>
        </div>
        <div className="item">
          <img
            src="https://img.discogs.com/C0yIaStm5NWF-u4_z3ftK_lONDs=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-573388-1379265270-2318.jpeg.jpg"
            alt="Logo AC/DC"
            className="pic"
          />

          <p className="titulo">Iron Maiden</p>
        </div>
        <div className="item">
          <img
            src="https://img.discogs.com/C0yIaStm5NWF-u4_z3ftK_lONDs=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-573388-1379265270-2318.jpeg.jpg"
            alt="Logo AC/DC"
            className="pic"
          />

          <p className="titulo">Iron Maiden</p>
        </div>
        <div className="item">
          <img
            src="https://img.discogs.com/C0yIaStm5NWF-u4_z3ftK_lONDs=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-573388-1379265270-2318.jpeg.jpg"
            alt="Logo AC/DC"
            className="pic"
          />

          <p className="titulo">Iron Maiden</p>
        </div>
        <div className="item">
          <img
            src="https://img.discogs.com/C0yIaStm5NWF-u4_z3ftK_lONDs=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-573388-1379265270-2318.jpeg.jpg"
            alt="Logo AC/DC"
            className="pic"
          />

          <p className="titulo">Iron Maiden</p>
        </div>
      </div>
    );
  }
}

export default ArtistCard;
