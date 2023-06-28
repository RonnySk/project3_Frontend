import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>HomePage</h1>
      <Link to="/loginPage">
        <p>Login</p>
      </Link>
    </div>
  );
}

export default HomePage;
