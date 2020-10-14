import React from "react";
import Post from "./post";
import firebase from "firebase/app";
import "firebase/database";
import Loading from "./loading";

class FeedContent extends React.Component {
  state = {
    data: [],
    loading: true,
  };
  componentDidMount() {
    this.setState({
      data: [
        {
          avatar:
            "https://lh3.googleusercontent.com/-0Be0kMvq83o/AAAAAAAAAAI/AAAAAAAAADw/DPClJzUcTrY/photo.jpg",
          nombre: "Escuela DevRock",
          pic:
            "fotos/la-playita-las-galeras-63769945.jpg",
          txt: "Ultimo Dev Rock Podcast :) "
        },
        {
          avatar:
            "https://lh3.googleusercontent.com/-5n_RO4d2faw/AAAAAAAAAAI/AAAAAAAACBw/gzBUz33i2LI/photo.jpg",
          nombre: "Ceci Escamilla Gigirey",
          pic:
            "fotos/la-playita-las-galeras-63769945.jpg",
          txt: "Se viene el HOT SALE en Talleres a Color"
        },
        {
          avatar:
            "https://lh5.googleusercontent.com/-R7EVYqUSM6k/AAAAAAAAAAI/AAAAAAAAc2k/B785irxFDrE/photo.jpg",
          nombre: "Jeremías Figueroa",
          pic:
            "fotos/la-playita-las-galeras-63769945.jpg",
          txt: "Chusmeando truchigram\nVamos con el curso de Firebase 🔥🙌🏾"
        }
      ]
    });

    const db = firebase.database();
    const dbRef = db.ref("pictures")
    dbRef.on('child_added', snapshot =>{
      this.setState({
        data: this.state.data.concat(snapshot.val()),
        loading: false,
      })
    })

  }

  render() {
    return (
      <React.Fragment>
        {this.state.loading/* && <Loading />*/}
        <br />
        <br />
        <br />
        <br />
        {this.state.data
          .map((item, i) => {
            return (
              <Post
                key={i}
                txt={item.txt}
                nombre={item.nombre}
                avatar={item.avatar}
                pic={item.pic}
              />
            );
          })
          .reverse()}
      </React.Fragment>
    );
  }
}

export default FeedContent;
