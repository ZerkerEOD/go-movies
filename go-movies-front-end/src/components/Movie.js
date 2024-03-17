import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";




const Movie = () => {
  const [movie, setMovie] = useState({});
  let { id } = useParams();

  useEffect(() => {
    let myMovie = 
      {
        id: 1,
        title: "Highlander",
        release_date: "1986-03-07",
        runtime: 116,
        mpaa_rating: "R",
        description:
          "An immortal Scottish swordsman faces off with other immortal warriors in order to obtain a coveted ability.",
      }
    setMovie(myMovie);
  }, [id])

  return (
    <div>
      <h2>Movie: {movie.title}</h2>
      <small><em>{movie.release_date}, {movie.runtime} minutes, Rated {movie.mpaa_rating}</em></small>
      <hr />
      <p>{movie.description}</p>
    </div>
  );
};

export default Movie;
