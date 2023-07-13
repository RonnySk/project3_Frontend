import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const API_URL = "http://localhost:5005";

function OneProperty() {
  const [project, setProperty] = useState([]);
  const { propertyId } = useParams();

  const getProperty = () => {
    axios
      .get(`${API_URL}/property/${propertyId}`)
      .then((response) => {
        const oneProperty = response.data;
        setProperty(oneProperty);
        console.log(" one propertie", oneProperty);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getProperty();
  }, []);

  return (
    <div>
      <p>{project.title}</p>
    </div>
  );
}

export default OneProperty;
