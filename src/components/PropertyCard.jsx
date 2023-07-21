import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

function PropertyCard({ property }) {
  const { user } = useContext(AuthContext);

  return (
    <div className="property-card">
      <h2>{property.title}</h2>
      <p>Price: {property.price}</p>
      <p>Size: {property.size}</p>
      <p>Rooms: {property.room}</p>
      <img src={property.imgUrl} alt={property.title} />
      <p>{property.description}</p>
      {!user.isAgent && (
        <Link to="/createmessenger" state={property}>
          Send a message to the Real Estate Agent
        </Link>
      )}
    </div>
  );
}

export default PropertyCard;
