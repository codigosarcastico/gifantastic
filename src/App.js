import React from "react";
import "./App.css";
import ListOfGift from "./components/ListOfGift.jsx";
import { Route } from "wouter";

import StaticContext from "./context/StaticContext";

import Home from "./pages/Home";
import Details from "./pages/Details";

// const GIFS = [
//   "https://media0.giphy.com/media/l1ugcCk6L8ee6UINi/200.webp?cid=ecf05e4741v3e4qfc8aat338sjkn38xfeu6228xnp4wifmbv&rid=200.webp",
//   "https://media3.giphy.com/media/rRp3WHP2qIQNi/200w.webp?cid=ecf05e4741v3e4qfc8aat338sjkn38xfeu6228xnp4wifmbv&rid=200w.webp",
//   "https://media1.giphy.com/media/9uxmbCzQCRGKY/200w.webp?cid=ecf05e4741v3e4qfc8aat338sjkn38xfeu6228xnp4wifmbv&rid=200w.webp",
// ];

// const DIFF_GIFS = ["https://media1.giphy.com/media/ZbhAbwBa7topa/giphy.webp?cid=ecf05e4741v3e4qfc8aat338sjkn38xfeu6228xnp4wifmbv&rid=giphy.webp"];

function App() {
  return (
    <StaticContext.Provider value={{
      name: 'Carlos',
      mensaje: 'Hola mundo Context con proovider'
    }}>
      <div className="App-Content">
        <section className="App-Content">
          <Home />

          {/* <Link to="/"><h1>App Gifantastic</h1></Link>
        <Link to="/gif/redhead">Gif de Redhead</Link>
        <Link to="/gif/panda">Gif de Panda</Link>
        <Link to="/gif/matrix">Gif de Matrix</Link>
        <Link to="/gif/instagram">Gif de Instagram</Link> */}

          <Route component={ListOfGift} path="" />
          <Route component={ListOfGift} path="/search/:keyword" />
          <Route component={Details} path="/gif/:keyword" />
        </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
