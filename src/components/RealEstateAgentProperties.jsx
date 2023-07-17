import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../config/config.index";
import "../css/PropertiesCard.css";

function RealEstateAgentProperties() {
  const [realEstateProperties, setRealEstateProperties] = useState([]);
  const { agent_id } = useParams();

  const getRealEstateAllProperties = () => {
    axios
      .get(`${API_URL}/property/realestateallproperties/${agent_id}`, agent_id)
      .then((response) => {
        setRealEstateProperties(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getRealEstateAllProperties();
  }, []);
  console.log("All Real Estate Properties", realEstateProperties);

  if (!realEstateProperties) {
    return <p>Loading ...</p>;
  } else {
    return (
      <div>
        <h1>Your properties</h1>
        {realEstateProperties.map((property) => {
          return (
            <li className="card-property" key={property.id}>
              <ul className="card-property-body">
                <p>{property.title}</p>
                <p>{property.price}</p>
                <p>{property.type}</p>
                <p>{property.size}</p>
                <p>{property.room}</p>
                <p>{property.bathroom}</p>
                <p>{property.year}</p>
                <p>{property.garage}</p>
                <p>{property.description}</p>
              </ul>
            </li>
          );
        })}
      </div>
    );
  }
}

export default RealEstateAgentProperties;
