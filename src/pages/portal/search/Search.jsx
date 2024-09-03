import React from "react";
import "./search.css";
import { useState, useEffect } from "react";
import axios from "../../../libs/axios";
import Navbar from "../../../components/navbar/Navbar";
import Input from "../../../components/input/Input";
import Button from "../../../components/button/Button";
import { getPageData } from "../../../api/movies";
import List from "../../../components/row/List";
import Cards from "../../../components/cards/Cards";

const Search = () => {
  const [data, setData] = useState(null); 
  useEffect(() => {
    getPageData().then((res) => setData(res));
  }, []);

  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);


  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const getMovies = async (query) => {
    try {
      const response = await axios.get(
        `search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}`
      );
      const results = response.data.results;
  
      return results;
    } catch (err) {
      console.log(err);
      return [];
    }
  };

  useEffect(() => {
    if (search) {
      getMovies(search).then((results) => {
        setMovies(results);
      });
    }
  }, [search]);

  useEffect(() => {
    console.log(movies);
  }, [movies]);

  return (
    <>
      <div className="">
        <Navbar isUser />
        <div className="search-input">
          <div className="input">
            <Input
              type="search"
              bg="search"
              placeholder="Search Movies"
              value={search}
              onChange={handleChange}
            />
          </div>
          <Button
           className="getted"
            color="white"
            value="Search"
            size="small"
            background="bg-1"
            round="round"
          />
        </div>

        <div className="wish-list">
          {search ? (
            <div className="result-padding">
              <h1 className="result-heading">Results for {search}</h1>
              <div className="wish-list-items">
                {movies?.map((item) => (
                  <Cards movie={item} />
                ))}
              </div>
            </div>
          ) : (
            <>
              <List title="Trending Now" data={data?.trendingNow.results} />
            </>
          )}
        </div>
      </div>
    </>
  );
};


export default Search;