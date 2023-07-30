import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { API_URL } from "../config/config.index";
import "../css/PropertyCard.css";
import "../css/RealEstateAgentProperties.css";

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
      <div className="all-properties-card-container">
        <div className="all-properties-container">
          <h1>Your properties</h1>
          <Link className="add-property-btn" to="/addProperty">
            Add new Property
          </Link>

          {realEstateProperties.length === 0 ? (
            <p>loading properties</p>
          ) : (
            realEstateProperties.map((property) => {
              return (
                <div className="property-container">
                  <img src={property.imgUrl[0]} alt="house"></img>
                  <div className="property-info">
                    <h3>{property.title}</h3>
                    <p>
                      <span>Street:</span> {property.street}{" "}
                      {property.propertyNumber}
                    </p>
                    <p>
                      <span>Price:</span> €{property.price}
                    </p>
                    <Link
                      className="property-details-btn"
                      to={`/oneproperty/${property._id}`}
                    >
                      Property Details
                    </Link>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    );
  }
}

export default RealEstateAgentProperties;
