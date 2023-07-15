import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/auth.context";
import { useNavigate } from "react-router-dom";
import OneProperty from "./OneProperty";
const API_URL = "http://localhost:5005";

function AddProperty() {
  const [title, setTitle] = useState("");
  const [street, setStreet] = useState("");
  const [propertyNumber, setPropertyNumber] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [size, setSize] = useState("");
  const [room, setRoom] = useState("");
  const [bathroom, setBathroom] = useState("");
  const [year, setYear] = useState("");
  const [garage, setGarage] = useState("");
  const [description, setDescription] = useState("");

  const { user } = useContext(AuthContext);

  const [userId, setUserId] = useState(user._id);

  const navigate = useNavigate();

  const handleTitle = (e) => setTitle(e.target.value);
  const handleStreet = (e) => setStreet(e.target.value);
  const handlePropertyNumber = (e) => setPropertyNumber(e.target.value);
  const handlePrice = (e) => setPrice(e.target.value);
  const handleType = (e) => setType(e.target.value);
  const handleSize = (e) => setSize(e.target.value);
  const handleRoom = (e) => setRoom(e.target.value);
  const handleBathroom = (e) => setBathroom(e.target.value);
  const handleYear = (e) => setYear(e.target.value);
  const handleGarage = (e) => setGarage(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);

  const handleAddPropertySubmit = (e) => {
    e.preventDefault();
    const requestBody = {
      title,
      street,
      propertyNumber,
      price,
      type,
      size,
      room,
      bathroom,
      year,
      garage,
      description,
      userId,
    };

    axios
      .post(`${API_URL}/property/addProperty`, requestBody)
      .then((response) => {
        const { newProperty } = response.data;

        navigate(`/oneproperty/${newProperty._id}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h1 className="auth-header">Add property</h1>

        <form onSubmit={handleAddPropertySubmit} className="auth-form">
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleTitle}
            className="auth-input"
          />

          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={price}
            onChange={handlePrice}
            className="auth-input"
          />

          <label>Street:</label>
          <input
            type="text"
            name="street"
            value={street}
            onChange={handleStreet}
            className="auth-input"
          />

          <label>Property number:</label>
          <input
            type="number"
            name="propertyNumber"
            value={propertyNumber}
            onChange={handlePropertyNumber}
            className="auth-input"
          />

          <label>Type:</label>
          <input
            type="text"
            name="type"
            value={type}
            onChange={handleType}
            className="auth-input"
          />

          <label>Size:</label>
          <input
            type="number"
            name="size"
            value={size}
            onChange={handleSize}
            className="auth-input"
          />

          <label>Room:</label>
          <input
            type="number"
            name="room"
            value={room}
            onChange={handleRoom}
            className="auth-input"
          />

          <label>Bathroom:</label>
          <input
            type="number"
            name="bathroom"
            value={bathroom}
            onChange={handleBathroom}
            className="auth-input"
          />

          <label>Year:</label>
          <input
            type="number"
            name="year"
            value={year}
            onChange={handleYear}
            className="auth-input"
          />

          <label>Garage:</label>
          <input
            type="number"
            name="garage"
            value={garage}
            onChange={handleGarage}
            className="auth-input"
          />

          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={handleDescription}
            className="auth-input"
          />

          <button type="submit" className="auth-btn">
            Add property
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProperty;
