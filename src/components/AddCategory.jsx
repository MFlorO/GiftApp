import { useState } from "react";


const AddCategory = ({onNewCategory}) => {

  const [inputValue, setinputValue] = useState("");

  const onInputChange = (event) => setinputValue(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault()

    setinputValue("")
    
    const inputValueTrim = inputValue.trim()

    if(inputValueTrim.length <= 1) return  //validacion: que el valor del input sea mas de 1 caracter
    
    
    onNewCategory(inputValueTrim.toLowerCase()) //OPCION 1

    // OPCION 2: setCategories( categories => [...categories, inputValue])  //MUY IMPORTANTE!!!DE ESTA FORMA ME EVITO TENER QUE 
                                                                            //PASAR "CATEGORIES" y "SETCATEGORIES" COMO PROPS
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="buscar Gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

export default AddCategory;
