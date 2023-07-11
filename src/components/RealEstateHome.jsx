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
        <Link to="/createHouse">Add new house</Link>
      </div>
    );
  }
}

export default RealEstateHome;
