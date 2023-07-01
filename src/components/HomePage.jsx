import { AuthContext } from "../context/auth.context";
import { useContext } from "react";
import RealEstateHome from "./RealEstateHome";

function HomePage() {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <p>Loading ...</p>;
  }
  if (user.isAgent) {
    return <RealEstateHome />;
  } else {
    return <h1>User HomePage {user.name}</h1>;
  }
}

export default HomePage;
