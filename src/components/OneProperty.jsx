import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../config/config.index";
import { AuthContext } from "../context/auth.context";
import "../css/PropertiesCard.css";
import PropertyCard from "./PropertyCard";

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
      <div className="property-card">
        <PropertyCard property={property} />

        {user.isAgent && (
          <div>
            <button
              type="submit"
              className="calculator-button"
              // onClick={handleUpdate}
            >
              Update
            </button>

            <button
              type="submit"
              className="calculator-button"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default OneProperty;
