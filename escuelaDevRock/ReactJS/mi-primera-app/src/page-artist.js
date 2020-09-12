import React from "react";
import SearchBar from "./components/search-bar";
import "bootstrap/dist/css/bootstrap.css";
import "./page-artist.css";
import SimilarArtist from "./components/similar-artist.js";
import Loading from "./components/loading";
import Error from "./components/error";

class pageSearchResult extends React.Component {
  state = {
    busqueda: "",
    data: {
      artist: {
        name: "",
        mbid: "",
        url: "",
        image: [
          { "#text": "" },
          { "#text": "" },
          { "#text": "" },
          { "#text": "" },
          { "#text": "" },
        ],
        streameable: "",
        ontour: "",
        stats: {},
        similar: {
          artist: [
            {
              name: "",
              url: "",
              image: [
                { "#text": "" },
                { "#text": "" },
                { "#text": "" },
                { "#text": "" },
                { "#text": "" },
              ],
            },
          ],
        },
        tags: {},
        bio: {
          links: {
            link: {},
          },
          published: "",
          summary: "",
          content: "",
        },
      },
    },
  };

  componentDidUpdate(prevProps) {
    if (this.props.location != prevProps.location) {
      this.fetchData();
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  componentDidMount(e) {
    this.fetchData();
  }

  fetchData = async () => {
    let artista = this.props.history.location.search.substr(1);

    let url =
      "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" +
      artista +
      "&api_key=d7c0b1163d76ca33e9ebe1b73c72a642&format=json";

    this.setState({
      loading: true,
    });
    const response = await fetch(url);
    const data = await response.json();
    if (data.error) {
      this.setState({
        loading: false,
        error: true,
        errorMensaje: data.message,
      });
    } else {
      this.setState({
        error: false,
        data: data,
        loading: false,
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <SearchBar
          onChange={this.handleChange}
          busqueda={this.state.busqueda}
        />
        {this.state.loading && <Loading />}
        {this.state.error && <Error errorMensaje={this.state.errorMensaje} />}
        <div className="container">
          <div className="row centrar">
            <div className="col-md-3"> </div>
            <div className="col-md-6">
              <img
                src={this.state.data.artist.image[3]["#text"]}
                className="pic-artist margenes50"
                alt=""
              />
              <h2>{this.state.data.artist.name}</h2>
              <p>{this.state.data.artist.bio.summary}</p>
            </div>
          </div>
          <div className="row centrar">
            <SimilarArtist data={this.state.data.artist.similar.artist} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default pageSearchResult;
