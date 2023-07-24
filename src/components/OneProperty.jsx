import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../config/config.index";
import { AuthContext } from "../context/auth.context";
import "../css/PropertyCard.css";
import PropertyCard from "./PropertyCard";

function OneProperty() {
  const { user } = useContext(AuthContext);
  const [property, setProperty] = useState("");
  const { property_id } = useParams();
  const navigate = useNavigate();

  const getProperty = async () => {
    try {
      const { data } = await axios.get(
        `${API_URL}/property/oneproperty/${property_id}`
      );
      const { oneProperty } = data;
      setProperty(oneProperty);

      console.log("one Property", oneProperty);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProperty();
  }, []);

  const handleDelete = async () => {
    try {
      alert("Property removed successfully!");
      const { data } = await axios.delete(
        `${API_URL}/property/oneproperty/${property_id}`,
        property_id
      );
      navigate(`/realestateallproperties/${user._id}`);
    } catch (error) {
      console.log(error);
    }
  };

  if (!property) {
    return <p>Loading ...</p>;
  } else {
    return (
      <div className="card-property">
        <PropertyCard property={property} />

        {user.isAgent && (
          <div>
            <Link
              className="calculator-button"
              to={`/updateproperty/${property._id}`}
            >
              Update
            </Link>
            <button
              type="submit"
              className="calculator-button"
              onClick={handleDelete}
            >
              Delete
            </button>
            <Link
              to={`/realestateallproperties/${user._id}`}
              className="cta-button"
            >
              Back to your properties
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default OneProperty;
