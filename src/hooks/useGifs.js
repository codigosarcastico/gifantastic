import {useState, useEffect} from 'react'
import getGif from "../services/getGif";


export function useGifs({keyword} = {keyword : null}){
    const [gifs, setGifs] = useState([]);
    const [loading, setLoading] = useState(false);

    const keywordToUse = keyword || localStorage.getItem('LastKeyword') || 'random'
  
  console.log(keywordToUse)
    useEffect(() => { 
      (async () => {
        const datos = await getGif({ keyword : keywordToUse });  
        setGifs(datos.gif);
        setLoading(false);
        
        //Asignamos LocalStorage Al encontrar Resultados
        localStorage.setItem('LastKeyword',keyword)
      })();
      setLoading(true)
    }, [keyword]);//eslint-disable-line
   
     return {loading, keyword,gifs}
}