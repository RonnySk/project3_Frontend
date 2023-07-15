import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { API_URL } from "./ReactApi";
const API_URL = "http://localhost:5005";

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

  if (!property) {
    return <p>Loading ...</p>;
  } else {
    return (
      <div>
        <p>{property.title}</p>
      </div>
    );
  }
}

export default OneProperty;
