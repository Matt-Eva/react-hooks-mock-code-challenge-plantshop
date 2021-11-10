import React, {useState} from "react";

function PlantCard({plant, updatePrice, deletePlant}) {
  const {name, price, image, id} = plant
  const [status, setStatus] = useState(true)
  const [formInfo, setFormInfo] = useState("")

  const changeStatus = () =>{
    setStatus(status => !status)
  }

  const handleChange = (e) =>{
    setFormInfo(e.target.value)
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    setFormInfo("")
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: ${price}</p>
      {status ? (
        <button className="primary" onClick={changeStatus}>In Stock</button>
      ) : (
        <button onClick={changeStatus}>Out of Stock</button>
      )}
      <form onSubmit={(e) =>{
        handleSubmit(e)
        updatePrice(formInfo, plant.id)
      }}>
        <input type="number" placeholder="Update price ..." value={formInfo} onChange={handleChange}/>
        <button type="submit">Submit</button>
      </form>
      <button onClick={() => deletePlant(id)}>Mulch {name}</button>
    </li>
  );
}

export default PlantCard;
