import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { useContext } from "react";

function HomePage() {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1>HomePage {user.name} </h1>
      <h2>Hello</h2>
    </div>
  );
}

export default HomePage;
