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
        setRealEstateProperties(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getRealEstateAllProperties();
  }, []);

  console.log("allRealEstateProperties", realEstateProperties);

  return (
    <div>
      <h1>Your Properties</h1>
    </div>
  );
}

export default RealEstateAgentProperties;
