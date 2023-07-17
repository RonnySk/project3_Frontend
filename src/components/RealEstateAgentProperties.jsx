import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { API_URL } from "../config/config.index";

function RealEstateAgentProperties() {
  const [realEstateProperties, setRealEstateProperties] = useState([]);
  const { agent_id } = useParams();

  const getRealEstateAllProperties = () => {
    axios
      .get(`${API_URL}/property/realestateallproperties/${agent_id}`, agent_id)
      .then((response) => {
        const { allRealEstateProperties } = response.data;
        setRealEstateProperties(allRealEstateProperties);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getRealEstateAllProperties();
  }, []);

  console.log("allRealEstateProperties", realEstateProperties);

  if (!realEstateProperties) {
    return <p>Loading ...</p>;
  } else {
    return (
      <div>
        <h1>Your properties</h1>
        {/* {realEstateProperties.map((property) => (
          <div>
            <p>{property.title}</p>
          </div>
        ))} */}
      </div>
    );
  }
}

export default RealEstateAgentProperties;
