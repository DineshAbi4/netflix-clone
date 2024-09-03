
import React, { useEffect, useState } from "react";
import "./herobanner.css";
// import HeroImg from "./../../assets/images/hero-banner.jpg";
import { FaPlay } from "react-icons/fa";
import { getPageData } from "../../api/movies";
import Navbar from ".././navbar/Navbar";
import Heading from "../heading/Heading";
import Button from "../button/Button";
import Content from "../heading/Content";

const HeroBanner = () => {
  // const baseUrl = "http://image/tumb.org/3/";
  const baseUrl = "https://image.tmdb.org/t/p/original";
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    const getMovie = () => {
      getPageData().then((response) =>
        setMovie(
          response?.netflixOriginals?.results[
            Math.floor(
              Math.random() * (response?.netflixOriginals?.results.length - 1)
            )
          ]
        )
      );
    };
    getMovie();
    const key = setInterval(() => getMovie(), 5000);

    return () => {
      clearInterval(key);
    };
  }, []);

  const handleDescription = (data, n) => {
    return data?.length > n ? data.substring(0, n) + "..." : data;
  };

  console.log(movie);

  return (
    <>
      <main className="hero-banner">
        <Navbar isUser />
        <div className="hero-img">
          <img
            src={`${baseUrl + movie?.backdrop_path}`}
            alt="hero banner img"
          />
        </div>
        <div className="hero-content">
          <Heading title={movie?.name || movie?.title} />
          <div className="hero-buttons">
            <Button
              size="small-play"
              icon={<FaPlay />}
              iconProp="rightarrow"
              color="black"
              bg="bg-white"
              value="Play"
            />
            <Button
              size="small-play"
              color="white"
              bg="bg-trans"
              value="Watch Later"
            />
          </div>
          <Content
            className="hero-text"
            content={handleDescription(movie?.overview, 200)}
          />
        </div>
      </main>
    </>
  );
};

export default HeroBanner;
