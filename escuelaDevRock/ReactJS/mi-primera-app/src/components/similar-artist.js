import React from "react";
import ArtistCard from "./artist-card.js";

class SimilarArtist extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="row centrar margenes50">
          <div className="col-md-12">
            <h5>Similar Artist xD</h5>
            <hr />
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <ArtistCard img="http://placehold.it/350x350" titulo="Test loco" />
          </div>
          <div className="col-md-3">
            <ArtistCard img="http://placehold.it/350x350" titulo="Test loco" />
          </div>
          <div className="col-md-3">
            <ArtistCard img="http://placehold.it/350x350" titulo="Test loco" />
          </div>
          <div className="col-md-3">
            <ArtistCard img="http://placehold.it/350x350" titulo="Test loco" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SimilarArtist;
