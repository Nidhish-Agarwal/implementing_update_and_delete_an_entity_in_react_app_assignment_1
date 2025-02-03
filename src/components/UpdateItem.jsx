import { useEffect, useState } from "react";
import axios from "axios";

const UpdateItem = ({ item }) => {
  const API_URI = `http://${import.meta.env.VITE_API_URI}/doors`;

  const [formData, setFormData] = useState({
    name: item.name || "",
    description: item.description || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.put(`${API_URI}/${item.id}`, formData);
      console.log(response);
    } catch (er) {
      console.log(er);
    }
  };
  // 1. Create a state for the form
  // 2. Create a function to handle the form submission
  // 3. Create a function to handle the form input changes

  // your code here
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Name : </label>
        <input
          type="text"
          name="name"
          id=""
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="">Description : </label>
        <input
          type="text"
          name="description"
          id=""
          value={formData.description}
          onChange={handleChange}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateItem;
