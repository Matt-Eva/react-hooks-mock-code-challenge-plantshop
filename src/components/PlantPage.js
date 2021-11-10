import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantData, setPlantData] = useState([])
  const [search, setSearch] = useState("")

  const displayPlants = plantData.filter(plant => plant.name.toLowerCase().includes(search.toLowerCase()))

  useEffect(() =>{
    fetch("http://localhost:6001/plants")
    .then(r => r.json())
    .catch(error => console.error(error))
    .then(data => setPlantData(data))
  }, [])

  const searchInput = (value) =>{
    setSearch(value)
  }

  const addPlant = (plant) =>{
    const configObj = {
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(plant)
    }

    fetch("http://localhost:6001/plants", configObj)
    .then(r => r.json())
    .catch(error => console.error(error))
    .then(newPlant => setPlantData([...plantData, newPlant]))

  }

  return (
    <main>
      <NewPlantForm addPlant={addPlant}/>
      <Search search={search} searchInput={searchInput}/>
      <PlantList displayPlants={displayPlants}/>
    </main>
  );
}

export default PlantPage;
