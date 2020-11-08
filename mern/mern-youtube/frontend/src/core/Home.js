import React, { useEffect, useState } from "react";
import Navbar from "../layout/Navbar";
import { getVideogames } from "./apiCore";
import Card from "./card";

const Home = (req, res) => {
  const [videogames, setVideogames] = useState([]);
  const [error, setError] = useState(false);

  const loadVideogames = () => {
    getVideogames().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setVideogames(data);
        console.log(data);
      }
    });
  };

  useEffect(() => {
    loadVideogames();
  });

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          {videogames.map((videogame, i) => {
            <div key={i} className="col-lg-4 col-md-6 col-sm-6">
              <Card videogame={videogame} />
            </div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
