import React, { useState } from "react";
import PlantCard from "./PlantCard";
import NewPlantForm from "./NewPlantForm";
import { useEffect } from "react";

function PlantList() {

        const [ plant , setPlant] = useState([]) //array of new project

  useEffect(()=> {
      async function fetchPlantData() {
        fetch("http://localhost:6001/plants")
        .then(response => {
          return response.json()
        })
        .then(plants => setPlant(plants))
        .catch(error => console.log(error))
      }
      fetchPlantData()
        },[])
 
  return (
    <ul className="cards">
      <PlantCard />
      {plant.map((flop) => (
        <plant key = {flop.id} plant = {flop} />
      ))}
    </ul>
  );
}

export default PlantList;
