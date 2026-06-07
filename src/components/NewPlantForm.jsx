import React, {useState} from "react";

function NewPlantForm() {

  const [newPlantData, setNewPlant] = useState({
        name: "",
        image : "",
        price: 0
  })

  const handleInputChange = (event) => {
    const {name, value} = event.target 
       const newPlant = {
           ...newPlantData,   //spread operator
           [name] : value  
        }
          setNewPlant(newPlant)
    }

  const handleNewPlant = (event) => {
    event.preventDefault() 
    const Plant = {
        id: Date.now(),
        ...newPlantData
  }
    setPlant([...plant, Plant])
}
  
      //i think t6nhis can also be used for thje search funtionality
     
      function handleSubmit(event){
        event.preventDefault()

      }

  //useEffcet()
  //out of stock featuie o
  //searcg...
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form >
        <input 
        type="text" 
        name="name" 
        placeholder="Plant name"
        value={newPlantData.name}
        onChange={handleInputChange}
         />
        <input 
        type="text" 
        name="image" 
        placeholder="Image URL" 
        value={newPlantData.image}
        onChange={handleInputChange}
        />
        <input 
        type="number" 
        name="price" 
        step="0.01" 
        placeholder="Price"
        value={newPlantData.price}
        onChange={handleInputChange}
         />
        <button 
        type="submit"

        >Add Plant</button>
      </form>

    </div>
  );
}

export default NewPlantForm;
