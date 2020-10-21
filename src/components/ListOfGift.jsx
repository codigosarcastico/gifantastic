import React, { useState, useEffect } from "react";
import Gift from "../components/Gift.jsx";
import getGif from "../services/getGif";

const ListOfGift = ({ params }) => {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);

  const { keyword } = params;

  useEffect(() => { 
    (async () => {
      const datos = await getGif({ keyword });
      setGifs(datos.gif);
      setLoading(false);
    })();
    setLoading(true)
  }, [keyword]);
 
   if(loading) return <i> Loading</i>

  return (
    <>
      {gifs.map(({ id, title, url }) => (
        <Gift title={title} id={id} url={url} key={id} />
      ))}
    </>
  );
};

export default ListOfGift;
