import React from "react";
import PlantCard from "./PlantCard";

function PlantList({displayPlants}) {
  const plants = displayPlants.map(plant => <PlantCard plant={plant} key={plant.id}/>)
  return (
    <ul className="cards">
      {plants}
    </ul>
  );
}

export default PlantList;
