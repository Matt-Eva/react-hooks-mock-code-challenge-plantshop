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

  const updatePrice = (price, id) =>{
    const newPrice = {
      price: price
    }
    const configObj={
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPrice)
    }

    fetch(`http://localhost:6001/plants/${id}`, configObj)
    .then(r => r.json())
    .catch(error => console.error(error))
    .then(data =>{
      const updatedPrices = plantData.map(plant => {
        if (plant.id === id){
          return data
        } else {
          return plant
        }
      })

      setPlantData([...updatedPrices])
    })
  }

  const deletePlant = (id) =>{
    fetch(` http://localhost:6001/plants/${id}`, {method: "DELETE"})
    .then(() =>{
      const onePlantFewer = plantData.filter(plant => plant.id !== id)
      
      setPlantData([...onePlantFewer])
    })
  }

  return (
    <main>
      <NewPlantForm addPlant={addPlant}/>
      <Search search={search} searchInput={searchInput}/>
      <PlantList displayPlants={displayPlants} updatePrice={updatePrice} deletePlant={deletePlant}/>
    </main>
  );
}

export default PlantPage;
