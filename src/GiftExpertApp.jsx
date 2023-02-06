import { useState } from "react";
import { AddCategory, GiftGrid } from "~/components";
import "~/styles.css";



const GiftExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const addCategory = (newCategory) => {
    if (categories.includes(newCategory)) return; //Filtro para evitar que se agreguen categorias con nombres iguales
    setCategories([...categories, newCategory]);
  };

  return (
    <>
      {/* titulo */}
      <h1>GiftExpertApp</h1>

      {/* input */}
      <AddCategory onNewCategory={addCategory} />

      {/* listado de Gift */}
      <div>
        {categories.map((category) => (
          <GiftGrid key={category} category={category} />
        ))}
      </div>
    </>
  );
};

export default GiftExpertApp;
