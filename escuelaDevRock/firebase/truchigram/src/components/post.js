import React from "react";
import firebase from "firebase/app";
import "firebase/firebase-storage";
class Post extends React.Component {
  state = {
    url: ""
  };

  componentWillMount(){
    this._isMounted = true;
    
    /**
     * 
     * POR FIN!!!!!!!!!!!!!!
     * todo el dia para hacer esto.
     * Solucionado con la documentacion de firebase.
     *  
     */

    let referencia = this.props.pic.substring(6)
    console.log("referencia: ",referencia);
    var storage = firebase.storage();
    var storageRef = storage.ref("/fotos/")

    storageRef.child(referencia).getDownloadURL().then((imagen) => {
      this.setState({
        url: imagen
      })
    }).catch((error) =>{
      console.log("error: ",error.message);
    })
    
  }
  

  render() {
    return (
      <React.Fragment>
        <div className="card">
          <div className="card-content">
            <div className="row margin0">
              <div className="col s2 l1 valign-wrapper">
                <img
                  src={this.props.avatar}
                  alt={this.props.nombre}
                  className="circle cardPic inline"
                />
              </div>
              <div className="col s10 l6 valign-wrapper fix-nombre">
                <p className="inline cardName">{this.props.nombre}</p>
              </div>
            </div>
          </div>

          <div className="card-image">
            <img src={this.state.url} alt="" />
          </div>
          <div className="card-content">
            <p>{this.props.txt}</p>
          </div>
        </div>{" "}
        <br />
        <br />
      </React.Fragment>
    );
  }
}

export default Post;
