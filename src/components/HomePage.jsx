import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { useContext } from "react";

function HomePage() {
  const { user } = useContext(AuthContext);

  console.log("home page user info", user);

  return (
    <div>
      <h1>HomePage </h1>
      <Link to="/loginPage">
        <p>Login</p>
      </Link>
      <Link to="/signupPage">
        <p>Signup</p>
      </Link>
    </div>
  );
}

export default HomePage;
