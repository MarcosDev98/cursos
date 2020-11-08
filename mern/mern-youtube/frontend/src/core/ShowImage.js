/* eslint react/prop-types: 0 */
import React from "react";
import { API } from "../config";
import "./ShowImage.css";

const ShowImage = ({ item, url }) => {
  return (
    <div className="product-img">
      <img
        //src={`${API}/${url}/photo/${item._id}`}
        src="http://localhost:5000/api/videogame/photo/5fa0a13015a9a601e1480a64"
        alt={item.name}
        className="mb-3 img-cont"
        style={{ maxHeight: "600px", maxWidth: "300px" }}
      />
    </div>
  );
};

export default ShowImage;
