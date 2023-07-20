import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../config/config.index";
import { AuthContext } from "../context/auth.context";
import "../css/PropertiesCard.css";

function OneProperty() {
  const { user } = useContext(AuthContext);
  const [property, setProperty] = useState("");
  const { property_id } = useParams();
  const navigate = useNavigate();

  const getProperty = () => {
    axios
      .get(`${API_URL}/property/oneproperty/${property_id}`, property_id)
      .then((response) => {
        const { oneProperty } = response.data;
        setProperty(oneProperty);
        console.log(" one property", oneProperty);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getProperty();
  }, []);

  const handleDelete = () => {
    axios
      .delete(`${API_URL}/property/${property_id}`, property_id)
      .then((response) => {
        navigate(`/realestateallproperties/${user._id}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (!property) {
    return <p>Loading ...</p>;
  } else {
    return (
      <div className="card-property">
        <p>{property.title}</p>
        <img src={property.imgUrl} alt={property.title} /> {/* Image element added here */}
        <p>{property.price}</p>
        <p>{property.type}</p>
        <p>{property.size}</p>
        <p>{property.room}</p>
        <p>{property.bathroom}</p>
        <p>{property.year}</p>
        <p>{property.garage}</p>
        <p>{property.description}</p>
        {user.isAgent && (
          <div>
            <button
              type="submit"
              className="calculator-button"
              // onClick={handleDelete}
            >
              Update
            </button>

            <button type="submit" className="calculator-button" onClick={handleDelete}>
              Delete
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default OneProperty;
