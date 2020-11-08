import { API } from "../config";

export const getVideogames = () => {
  return fetch(`${API}/videogame/videogames`, {
    method: "GET",
  })
    .then((response) => {
      console.log("Respuesta API: ", response);
      return response.json();
    })
    .catch((err) => {
      return console.log(err);
    });
};
