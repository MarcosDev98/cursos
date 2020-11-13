import React, { Component, useEffect, useState } from "react";
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
    // do anything only one time if you pass empty array []
    // keep in mind, that component will be rendered one time (with default values) before we get here
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          {videogames.map((videogame, i) => (
            <div key={i} className="col-lg-4 col-md-6 col-sm-6 col-sm-6">
              <Card videogame={videogame} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
