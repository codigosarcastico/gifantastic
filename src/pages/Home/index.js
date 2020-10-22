import React, { useState } from "react";
import { Link, useLocation } from "wouter";

const GIF_POPULAR = ["Venezuela", "Ecuador", "Chile", "Mexico"];

const Home = () => {
  const [keyword, setKeyword] = useState("");
  const [path, pushLocation] = useLocation();

  const handleSubmit = (evt) => {
      evt.preventDefault()
      pushLocation(`/search/${keyword}`)
      console.log(path)
  };

  const handleChange = (evt) => {
    setKeyword(evt.target.value);
  };

  return (
    <>

      <form onSubmit={handleSubmit}>
        <input type="search" value={keyword} onChange={handleChange} />
      </form>

      <ul>
        {GIF_POPULAR.map((item) => (
          <li key={item}>
            <Link to={`/search/${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
      
      <Link to="/">
        <h3>Ultimos Gif buscados</h3>
      </Link>

    </>
  );
};

export default Home;
