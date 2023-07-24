import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import "../css/PropertyCard.css";

function PropertyCard({ property }) {
  const { user } = useContext(AuthContext);

  return (
    <div className="property-card">
      <div className="img-wrapper">
        <img src={property.imgUrl} alt={property.title} />
      </div>
      <div className="info">
        <h2 className="title">{property.title}</h2>
        <p className="price">Price: €{property.price}</p>
        <p className="size">
          Size: {property.size} m<sup>2</sup>
        </p>
        <p className="rooms">Rooms: {property.room}</p>
        <p className="description">Description: {property.description}</p>
        {!user.isAgent && (
          <Link className="link" to="/createmessenger" state={property}>
            Send a message to the Real Estate Agent
          </Link>
        )}
      </div>
    </div>
  );
}

export default PropertyCard;
