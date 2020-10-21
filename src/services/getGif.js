
// import App from '../App'
const apiKey = 'api_key=kJiFf03QFVleqPKgH1agXmjd35a416Vu'


export default async function getGif({keyword = 'mortal kombat'} = {}){
    console.log(keyword)
    
    const apiURL =
    `https://api.giphy.com/v1/gifs/search?${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`;

    try {
        const res = await fetch(apiURL);
        const {data} = await res.json()
        const gif = data.map(item => {
            const {images,id,title} = item        
            const {url} = images.fixed_height_small    
            return {title,id,url}
        })  
        return {gif}
      } catch (err) {
        console.log(err);
      }
} 