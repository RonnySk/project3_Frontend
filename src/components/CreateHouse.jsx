import { useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
const API_URL = "http://localhost:5005";

function CreateHouse() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [size, setSize] = useState("");
  const [room, setRoom] = useState("");
  const [bathroom, setBathroom] = useState("");
  const [year, setYear] = useState("");
  const [garage, setGarage] = useState("");
  const [description, setDescription] = useState("");

  const { user } = useContext(AuthContext);

  const handleTitle = (e) => setTitle(e.target.value);
  const handlePrice = (e) => setPrice(e.target.value);
  const handleType = (e) => setType(e.target.value);
  const handleSize = (e) => setSize(e.target.value);
  const handleRoom = (e) => setRoom(e.target.value);
  const handleBathroom = (e) => setBathroom(e.target.value);
  const handleYear = (e) => setYear(e.target.value);
  const handleGarage = (e) => setGarage(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);

  //   const handleHouseCreateSubmit = (e) => {
  //     e.preventDefault();
  //     const requestBody = { email, password };

  //     axios
  //       .post(`${API_URL}/auth/login`, requestBody)
  //       .then((response) => {
  //         console.log("JWT token", response.data.authToken);

  //         storeToken(response.data.authToken);

  //         authenticateUser();
  //       })
  //       .catch((error) => {
  //         if (
  //           error.response &&
  //           error.response.data &&
  //           error.response.data.message
  //         ) {
  //           const errorDescription = error.response.data.message;
  //           setErrorMessage(errorDescription);
  //         } else {
  //           setErrorMessage("An error occurred.");
  //         }
  //       });
  //   };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h1 className="auth-header">Login</h1>

        <form onSubmit={handleHouseCreateSubmit} className="auth-form">
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
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateHouse;