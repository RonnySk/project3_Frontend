import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>HomePage</h1>
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
