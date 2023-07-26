import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../config/config.index";
import { AuthContext } from "../context/auth.context";

function UpdateProperty() {
  const { user } = useContext(AuthContext);
  const [userId, setUserId] = useState(user._id);
  const [property, setProperty] = useState("");
  const { property_id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [street, setStreet] = useState("");
  const [propertyNumber, setPropertyNumber] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [size, setSize] = useState("");
  const [room, setRoom] = useState("");
  const [bathroom, setBathroom] = useState("");
  const [year, setYear] = useState("");
  const [garage, setGarage] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [imgUrl, setImgUrl] = useState([]);

  const getProperty = async () => {
    try {
      const { data } = await axios.get(
        `${API_URL}/property/oneproperty/${property_id}`
      );
      const { oneProperty } = data;
      setProperty(oneProperty);

      setTitle(oneProperty.title);
      setStreet(oneProperty.street);
      setPropertyNumber(oneProperty.propertyNumber);
      setCity(oneProperty.city);
      setCountry(oneProperty.country);
      setPrice(oneProperty.price);
      setType(oneProperty.type);
      setSize(oneProperty.size);
      setRoom(oneProperty.room);
      setBathroom(oneProperty.bathroom);
      setYear(oneProperty.year);
      setGarage(oneProperty.garage);
      setDescription(oneProperty.description);
      setImgUrl(oneProperty.imgUrl);

      console.log("one Property", oneProperty);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProperty();
  }, []);

  const handleTitle = (e) => setTitle(e.target.value);
  const handleStreet = (e) => setStreet(e.target.value);
  const handlePropertyNumber = (e) => setPropertyNumber(e.target.value);
  const handleCity = (e) => setCity(e.target.value);
  const handleCountry = (e) => setCountry(e.target.value);
  const handlePrice = (e) => setPrice(e.target.value);
  const handleType = (e) => setType(e.target.value);
  const handleSize = (e) => setSize(e.target.value);
  const handleRoom = (e) => setRoom(e.target.value);
  const handleBathroom = (e) => setBathroom(e.target.value);
  const handleYear = (e) => setYear(e.target.value);
  const handleGarage = (e) => setGarage(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleSelectFile = (e) => setFile(e.target.files[0]);

  const handleUpload = async () => {
    try {
      const data = new FormData();
      data.append("my_file", file);
      const res = await axios.post(`${API_URL}/property/upload`, data);

      setImgUrl([...imgUrl, res.data.url]);
      console.log("imgArr response api", imgUrl);
    } catch (error) {
      alert(error.message);
    }
  };
  console.log("imgArr response api", imgUrl);

  const handleEditPropertySubmit = async (e) => {
    try {
      e.preventDefault();

      const requestBody = {
        title,
        street,
        propertyNumber,
        city,
        country,
        price,
        type,
        size,
        room,
        bathroom,
        year,
        garage,
        description,
        userId,
        imgUrl,
      };

      const updateProperty = await axios.post(
        `${API_URL}/property/updateProperty/${property_id}`,
        requestBody
      );
      console.log("data after update", updateProperty);
      navigate(`/oneproperty/${property_id}`);
      alert("Property updated successfully!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h1 className="auth-header">Edit property</h1>

        <label>Add fotos:</label>
        <input
          type="file"
          id="file"
          className="auth-input"
          onChange={handleSelectFile}
          multiple={false}
        />
        <button onClick={handleUpload} className="auth-btn">
          Add image
        </button>

        {property &&
          property.imgUrl.map((oneImgUrl, index) => (
            <div key={oneImgUrl}>
              <img src={oneImgUrl} alt="property"></img>
              <button
                onClick={() => {
                  setImgUrl(imgUrl.filter((a) => a !== oneImgUrl));
                }}
              >
                Delete image
              </button>
            </div>
          ))}

        <form onSubmit={handleEditPropertySubmit} className="auth-form">
          <label>Title:</label>
          <input
            type="text"
            name="title"
            placeholder={property.title}
            value={title}
            onChange={handleTitle}
            className="auth-input"
          />

          <label>Street:</label>
          <input
            type="text"
            name="street"
            placeholder={property.street}
            value={street}
            onChange={handleStreet}
            className="auth-input"
          />

          <label>Property Number:</label>
          <input
            type="number"
            name="propertyNumber"
            placeholder={property.propertyNumber}
            value={propertyNumber}
            onChange={handlePropertyNumber}
            className="auth-input"
          />

          <label>City:</label>
          <input
            type="text"
            name="city"
            value={city}
            onChange={handleCity}
            className="auth-input"
          />

          <label>Country:</label>
          <input
            type="text"
            name="country"
            value={country}
            onChange={handleCountry}
            className="auth-input"
          />

          <label>Price:</label>
          <input
            type="number"
            name="price"
            placeholder={property.price}
            value={price}
            onChange={handlePrice}
            className="auth-input"
          />

          <label>Type:</label>
          <input
            type="text"
            name="type"
            placeholder={property.type}
            value={type}
            onChange={handleType}
            className="auth-input"
          />

          <label>Size:</label>
          <input
            type="number"
            name="size"
            placeholder={property.size}
            value={size}
            onChange={handleSize}
            className="auth-input"
          />

          <label>Room:</label>
          <input
            type="number"
            name="room"
            placeholder={property.room}
            value={room}
            onChange={handleRoom}
            className="auth-input"
          />

          <label>Bathroom:</label>
          <input
            type="number"
            name="bathroom"
            placeholder={property.bathroom}
            value={bathroom}
            onChange={handleBathroom}
            className="auth-input"
          />

          <label>Year:</label>
          <input
            type="number"
            name="year"
            placeholder={property.year}
            value={year}
            onChange={handleYear}
            className="auth-input"
          />

          <label>Garage:</label>
          <input
            type="number"
            name="garage"
            placeholder={property.garage}
            value={garage}
            onChange={handleGarage}
            className="auth-input"
          />

          <label>Description:</label>
          <textarea
            name="description"
            placeholder={property.description}
            value={description}
            onChange={handleDescription}
            className="auth-input"
          />

          <button type="submit" className="auth-btn">
            Save changes
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateProperty;
