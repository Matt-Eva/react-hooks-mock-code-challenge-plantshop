import React, {useState} from "react";

function PlantCard({plant}) {
  const [status, setStatus] = useState(true)

  const changeStatus = () =>{
    setStatus(status => !status)
  }

  const {name, price, image} = plant
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
    </li>
  );
}

export default PlantCard;
