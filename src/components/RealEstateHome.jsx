import React, { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function RealEstateHome() {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <p>Loading ...</p>;
  } else {
    return <h1>RealEstateHome teste {user.name}</h1>;
  }
}

export default RealEstateHome;
