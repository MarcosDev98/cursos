import React from "react";
import ArtistCard from "./artist-card.js";

class SimilarArtist extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="row centrar margenes50">
          <div className="col-md-12">
            <h5>Similar Artist </h5>
            <br />
            <hr />
          </div>
        </div>

        <div className="row centrar">
          {this.props.data.slice(0, 4).map((item, i) => {
            return (
              <div className="row centrar">
                <ArtistCard
                  img={item.image[3]["#text"]}
                  titulo={item.name}
                  key={i}
                />
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default SimilarArtist;
