import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../context/auth.context";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../config/config.index";
import "../css/AddProperty.css";

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
  const [file, setFile] = useState(null);
  const [imgUrl, setImgUrl] = useState([]);
  // const [loading, setLoading] = useState(false);

  const { user } = useContext(AuthContext);
  const [userId, setUserId] = useState(user && user._id);

  useEffect(() => {
    if (user) {
      setUserId(user._id);
    }
  }, [user]);

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

  const handleAddPropertySubmit = async (e) => {
    e.preventDefault();

    // if (!userId) {
    //   alert("You need to be logged in to add a property!");
    //   return;
    // }

    // if (file) {
    //   try {
    //     const data = new FormData();
    //     data.append("my_file", file);
    //     const res = await axios.post(`${API_URL}/property/upload`, data);

    //     if (res.data.secure_url) {
    //       setImgUrl(res.data.secure_url);
    //     } else {
    //       console.log("Upload response does not contain secure_url", res.data);
    //     }
    //   } catch (error) {
    //     alert(error.message);
    //     return;
    //   }
    // }

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
      imgUrl,
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

        <label>Add fotos:</label>
        <input
          type="file"
          id="file"
          className="auth-input"
          onChange={handleSelectFile}
          multiple={false}
        />
        <button onClick={handleUpload} className="auth-btn">
          Add img
        </button>
        {imgUrl.map((oneImgUrl, index) => {
          return <img key={index} src={oneImgUrl} alt="property"></img>;
        })}
        {/* {imgUrl && <img src={imgUrl} alt="property"></img>} */}

        <form onSubmit={handleAddPropertySubmit} className="auth-form">
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleTitle}
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

          <label>Property Number:</label>
          <input
            type="number"
            name="propertyNumber"
            value={propertyNumber}
            onChange={handlePropertyNumber}
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
          <textarea
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
