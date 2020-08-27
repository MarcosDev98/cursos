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
      <div className="item">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSFUwUFqOLvKSsQAew1EI1x6roJSDInRWFFGQ&usqp=CAU"
          alt="Logo AC/DC"
          className="pic"
        />

        <p className="titulo">AC/DC</p>
      </div>
    );
  }
}

export default ArtistCard;
