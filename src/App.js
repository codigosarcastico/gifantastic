import React from "react";
import "./App.css";  
import ListOfGift from "./components/ListOfGift.jsx";
import {Route, Link} from 'wouter'

// const GIFS = [
//   "https://media0.giphy.com/media/l1ugcCk6L8ee6UINi/200.webp?cid=ecf05e4741v3e4qfc8aat338sjkn38xfeu6228xnp4wifmbv&rid=200.webp",
//   "https://media3.giphy.com/media/rRp3WHP2qIQNi/200w.webp?cid=ecf05e4741v3e4qfc8aat338sjkn38xfeu6228xnp4wifmbv&rid=200w.webp",
//   "https://media1.giphy.com/media/9uxmbCzQCRGKY/200w.webp?cid=ecf05e4741v3e4qfc8aat338sjkn38xfeu6228xnp4wifmbv&rid=200w.webp",
// ];

// const DIFF_GIFS = ["https://media1.giphy.com/media/ZbhAbwBa7topa/giphy.webp?cid=ecf05e4741v3e4qfc8aat338sjkn38xfeu6228xnp4wifmbv&rid=giphy.webp"];

function App() {
 

  return (
    <div className="App-Content">
        
      <section className="App-Content">

        

        <Link to="/"><h1>App Gifantastic</h1></Link>
        <Link to="/gif/redhead">Gif de Redhead</Link>
        <Link to="/gif/panda">Gif de Panda</Link>
        <Link to="/gif/matrix">Gif de Matrix</Link>
        <Link to="/gif/instagram">Gif de Instagram</Link>

        <Route component={ListOfGift} path='' /> 
        <Route component={ListOfGift} path='/gif/:keyword' /> 
      </section>
    </div>
  );
}

export default App;
