import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { useContext } from "react";

function HomePage() {
  const { user } = useContext(AuthContext);
  console.log("home page test user", user);

  if (!user) {
    return <p>Loading ...</p>;
  } else {
    return <h1>HomePage {user.name}</h1>;
  }
}

export default HomePage;
