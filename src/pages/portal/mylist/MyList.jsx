import React, { useEffect, useState } from "react";
import { getWishlist } from "../../../api/movies";
import Navbar from "../../../components/navbar/Navbar";
import "./mylist.css";
import Cards from "../../../components/cards/Cards";

const MyList = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getWishlist().then((data) => setMovies(data?.results));
  }, []);
  const movieId = movies?.map((item) => item.id);
  return (
    <div className="wishlist-page">
      <Navbar isUser />
      <div className="wishlist-items">
        <h2 className="result-heading"> My List</h2>
        <div className="wish-list-items">
          {movies?.map((item) => (
            <Cards movie={item} favMovies={movieId} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyList;