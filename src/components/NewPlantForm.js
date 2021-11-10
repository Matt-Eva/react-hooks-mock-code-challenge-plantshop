import React, {useState} from "react";

function NewPlantForm({addPlant}) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: ""
  })

  const handleInput = (e) =>{
    const name = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    setFormData({
      name: "",
      image: "",
      price: ""
    })
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={(e) =>{
        addPlant(formData)
        handleSubmit(e)
      }}>
        <input type="text" name="name" placeholder="Plant name" value={formData.name} onChange={handleInput}/>
        <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleInput}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={formData.price} onChange={handleInput}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
