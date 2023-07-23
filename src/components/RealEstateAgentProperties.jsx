import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { API_URL } from "../config/config.index";
import "../css/PropertyCard.css";

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

  console.log("params reals estate", agent_id);

  if (!realEstateProperties) {
    return <p>Loading ...</p>;
  } else {
    return (
      <div>
        <h1>Your properties</h1>
        <Link to="/addProperty">Add new Property</Link>
        {realEstateProperties.map((property) => {
          return (
            <li className="card-property" key={property._id}>
              <ul className="card-property-body">
                <p>{property.title}</p>
                <p>{property.price}</p>
                {console.log("property id", property._id)}
                <Link to={`/oneproperty/${property._id}`}>
                  Property Details
                </Link>
              </ul>
            </li>
          );
        })}
      </div>
    );
  }
}

export default RealEstateAgentProperties;
