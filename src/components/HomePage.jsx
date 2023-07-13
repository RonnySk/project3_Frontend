import { AuthContext } from "../context/auth.context";
import { useContext } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <p>Loading ...</p>;
  } else {
    return (
      <div>
        <h1>User HomePage {user.name}</h1>
        <Link to="/calculator">Mortgage Calculator</Link>
      </div>
    );
  }
}

export default HomePage;
