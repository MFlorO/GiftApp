import useFetchGifts from "~/hooks/useFetchGifts";
import GiftItem from "~/components/GiftItem";



const GiftGrid = ({ category }) => {

  const {data, isLoading} = useFetchGifts(category)

  return (
    <>
      <h3>{category}</h3>

      {isLoading && <h2>Cargando...</h2>}  {/*  Si isLoading es true aparece sino no */}

      <div className="card-grid">
        
        {/* OPCION 1 */}
        {data?.map( d => (
          <GiftItem key={d.id} {...d} />
        ))}

        {/* OPCION 2 */}
        {/* {data?.map(({id, title, url}) => (
          <GiftItem key={id} title={title} url={url}/>
        ))} */}

      </div>
    </>
  );
};

export default GiftGrid;
