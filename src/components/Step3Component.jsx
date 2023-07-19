import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/Step3.css";

function Step3Component() {
  const [showProperties, setShowProperties] = useState(false);
  const [properties, setProperties] = useState([]);
  const [filter, setFilter] = useState({
    minPrice: "",
    maxPrice: "",
    minSize: "",
  });

  useEffect(() => {
    if (showProperties) {
      axios
        .get("http://localhost:5005/property/allproperties")
        .then((response) => {
          setProperties(response.data.allProperty);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [showProperties]);

  const handleBackClick = () => {
    setShowProperties(false);
    setProperties([]);
    setFilter({
      minPrice: "",
      maxPrice: "",
      minSize: "",
    });
  };

  const filteredProperties = properties.filter(
    (property) =>
      (filter.minPrice === "" || property.price >= filter.minPrice) &&
      (filter.maxPrice === "" || property.price <= filter.maxPrice) &&
      (filter.minSize === "" || property.size >= filter.minSize)
  );

  return (
    <div className="step3-container">
      {!showProperties ? (
        <div className="step3-content">
          <h1 className="step3-heading">Step 3: Finding the Right House</h1>
          <p className="step3-text">
            Discovering your ideal home is a significant step in the home buying process. It's more than just about the number of rooms or the size of
            the yard. It's about finding a space that resonates with your lifestyle and needs. Here are some essential factors to consider in your
            search:
          </p>
          <ul className="step3-list">
            <li>Location: Consider proximity to work, schools, amenities, and the neighborhood vibe.</li>
            <li>Price: Ensure the property falls within your budget.</li>
            <li>
              Size: The house should accommodate your family and lifestyle. Consider the number of bedrooms and bathrooms, kitchen size, and storage
              space.
            </li>
            <li>Future Growth: If you plan on growing your family or hosting extended family, consider a home that can cater to this future need.</li>
            <li>Resale Value: Even though you're buying the property to live in, it's wise to consider its potential resale value for the future.</li>
            <li>Condition: Pay attention to the property's condition, including potential renovation needs.</li>
          </ul>
          <p className="step3-text">
            Take your time when searching for the right house. Attend open houses, research online, and don’t rush the process. Work closely with your
            real estate agent who can provide valuable advice and assist you in finding a property that suits your preferences and needs.
          </p>
          <button onClick={() => setShowProperties(true)}>Show me the properties!</button>
        </div>
      ) : (
        <div className="step3-content">
          <button className="back-button" onClick={handleBackClick}>
            Back
          </button>
          <div className="filters">
            <input placeholder="Min Price" value={filter.minPrice} onChange={(e) => setFilter({ ...filter, minPrice: e.target.value })} />
            <input placeholder="Max Price" value={filter.maxPrice} onChange={(e) => setFilter({ ...filter, maxPrice: e.target.value })} />
            <input placeholder="Min Size" value={filter.minSize} onChange={(e) => setFilter({ ...filter, minSize: e.target.value })} />
          </div>
          <div className="properties">
            {filteredProperties.map((property) => (
              <div key={property._id}>
                <h2>{property.title}</h2>
                <p>Price: {property.price}</p>
                <p>Size: {property.size}</p>
                <p>{property.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Step3Component;
