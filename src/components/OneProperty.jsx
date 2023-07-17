import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../config/config.index";

function OneProperty() {
  const [property, setProperty] = useState("");
  const { property_id } = useParams();

  const getProperty = () => {
    axios
      .get(`${API_URL}/property/oneproperty/${property_id}`, property_id)
      .then((response) => {
        const { oneProperty } = response.data;
        setProperty(oneProperty);
        console.log(" one propertie", oneProperty);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getProperty();
  }, []);

  const handleDelete = () => {
    axios
      .delete(`${API_URL}/property/housingprofile`)
      .then((response) => {
        console.log(response.data);
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
        <p>{property.pice}</p>
        <p>{property.type}</p>
        <p>{property.size}</p>
        <p>{property.room}</p>
        <p>{property.bathroom}</p>
        <p>{property.year}</p>
        <p>{property.garage}</p>
        <p>{property.description}</p>
        <button
          type="submit"
          className="calculator-button"
          onClick={handleDelete}
        >
          Update
        </button>

        <button type="submit" className="calculator-button">
          Delete
        </button>
      </div>
    );
  }
}

export default OneProperty;
