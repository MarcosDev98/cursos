import React from "react";
import ArtistCard from "./artist-card";

class SearchResult extends React.Component {
  state = {
    data: {
      similarartists: {
        artist: [],
      },
    },
  };
  componentDidMount() {
    this.fetchData(
      "http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=cher&api_key=d7c0b1163d76ca33e9ebe1b73c72a642&format=json"
    );
  }

  fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();

    this.setState({
      data: data,
    });
    console.log(data, "lo que trae la  api");
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            {this.state.data.similarartists.artist.map((item, i) => {
              return (
                <ArtistCard
                  img={item.image[0]["#text"]}
                  titulo={item.name}
                  key={i}
                />
              );
            })}

            <h1>{this.props.busqueda}</h1>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default SearchResult;
