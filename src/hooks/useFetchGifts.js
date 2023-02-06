import { useEffect, useState } from "react";
import getGifs from "~/helpers/getGifs";

const useFetchGifts = (category) => {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  const getData = async () => {
    const newData = await getGifs(category); //FETCH PARA OBTENER LOS GIFS
    setData(newData);
    setIsLoading(false);  //El loading de carga
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    data,     //data:data por eso se omite
    isLoading
  }
}

export default useFetchGifts