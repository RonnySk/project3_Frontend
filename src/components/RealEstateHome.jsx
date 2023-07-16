import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

function RealEstateHome() {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <p>Loading ...</p>;
  } else {
    return (
      <div>
        <h1>RealEstateHome teste {user.name}</h1>
        <Link to="/addProperty">Add new Property</Link>
        <Link to={`/realestateallproperties/${user._id}`}>
          See your properties
        </Link>
      </div>
    );
  }
}

export default RealEstateHome;
