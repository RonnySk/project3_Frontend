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
        <h1>Welcome {user.name}</h1>
        <Link to="/addProperty">Add new Property</Link>
        <Link to={`/realestateallproperties/${user._id}`}>
          See your properties
        </Link>
        <Link to={`/allmessenger/${user._id}`}>Go to the Messages</Link>
      </div>
    );
  }
}

export default RealEstateHome;
