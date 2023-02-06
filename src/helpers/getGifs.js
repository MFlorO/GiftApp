
//FETCH PARA OBTENER LOS GIFS
const getGifs = async (category) => {
  
    const url= `http://api.giphy.com/v1/gifs/search?api_key=jYW27S5Rp3I4W1XuwpxxUsdZeGS3KWI2&q=${category}&limit=5` 
  
    // fetch(url).then(response => response.json()).then(json => console.log(json.data))   //OPCION 1 
  
    // OPCION 2
    const resp = await fetch(url)
    const {data} = await resp.json()
  
  
    const gifs = data.map( d => ({
      id: d.id,
      title: d.title,
      url: d.images.downsized_medium.url
    }))
  
    return gifs
    
  }
  

export default getGifs