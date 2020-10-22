import React from "react";
import Gift from "../components/Gift.jsx";
// import getGif from "../services/getGif";

import { useGifs } from "../hooks/useGifs";

const ListOfGift = ({ params }) => {
  const { keyword } = params;
  const { loading, gifs } = useGifs({ keyword });

  /*const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => { 
    (async () => {
      const datos = await getGif({ keyword });
      setGifs(datos.gif);
      setLoading(false);
    })();
    setLoading(true)
  }, [keyword]);*/
  
  if(loading) return (
    <div className="lds-ripple"><div></div><div></div></div>
  )

  return (
    <>
    {gifs.map(({ id, title, url }) => (
      <Gift title={title} id={id} url={url} key={id} />
    ))}
  </>
  );
};

export default ListOfGift;

/*

       <>
          
          console.log(gifs)
       
       </>
 
  gifs.map(item => (
   gifs.map(({id, title, url}) => ( 
      <Gift title={title} id={id} url={url} key={id} />
   ))
   <h1>Sergio</h1>
 )) 
  
 
*/
