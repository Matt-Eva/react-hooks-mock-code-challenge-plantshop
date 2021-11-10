import React from "react";
import PlantCard from "./PlantCard";

function PlantList({displayPlants, updatePrice, deletePlant}) {
  const plants = displayPlants.map(plant => <PlantCard plant={plant} updatePrice={updatePrice} deletePlant={deletePlant} 
    key={plant.id}/>)
  return (
    <ul className="cards">
      {plants}
    </ul>
  );
}

export default PlantList;
