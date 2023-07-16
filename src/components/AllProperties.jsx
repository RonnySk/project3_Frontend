import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../config/config.index";

function AllProperties() {
  const [allProperties, setAllProperties] = useState([]);

  const getAllProperty = () => {
    axios
      .get(`${API_URL}/property/allproperties`)
      .then((response) => {
        const allProperties = response.data;
        console.log(" all properties", allProperties);
        setAllProperties(allProperties);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllProperty();
  }, []);

  return <div>AllProperties</div>;
}

export default AllProperties;
