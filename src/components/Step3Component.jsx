import React, { useState, useEffect } from "react";
import axios from "axios";
import Calculator from "./Calculator";
import "../css/Step3.css";
import { API_URL } from "../config/config.index";
import image from "../images/Mortgage.jpg";
import PropertyCard from "./PropertyCard";

function Step3Component() {
  const [showProperties, setShowProperties] = useState(false);
  const [properties, setProperties] = useState([]);
  const [showCalculator, setShowCalculator] = useState(false);

  const [filter, setFilter] = useState({
    minPrice: "",
    maxPrice: "",
    minSize: "",
  });

  useEffect(() => {
    if (showProperties) {
      axios
        .get(`${API_URL}/property/allproperties`)
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
    setShowCalculator(false); // Reset showCalculator state
  };

  const handleButtonClick = () => {
    setShowCalculator(true);
  };

  const handleFilterChange = (name, value) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      [name]: value,
    }));
  };

  const filteredProperties = properties.filter(
    (property) =>
      (filter.minPrice === "" || property.price >= parseInt(filter.minPrice)) &&
      (filter.maxPrice === "" || property.price <= parseInt(filter.maxPrice)) &&
      (filter.minSize === "" || property.size >= parseInt(filter.minSize))
  );

  return (
    <div className="step3-container">
      {!showProperties ? (
        <IntroContent handleShowProperties={() => setShowProperties(true)} />
      ) : (
        <PropertiesContent
          properties={filteredProperties}
          filter={filter}
          handleFilterChange={handleFilterChange}
          handleBackClick={handleBackClick}
          handleButtonClick={handleButtonClick}
          setShowCalculator={setShowCalculator}
          showCalculator={showCalculator}
        />
      )}
    </div>
  );
}

// Introductory content component
function IntroContent({ handleShowProperties }) {
  return (
    <div className="step3-content">
      <h1 className="step3-heading">Step 3: Finding the Right House</h1>
      <p className="step3-text">
        Discovering your ideal home is a significant step in the home buying
        process. It's more than just about the number of rooms or the size of
        the yard. It's about finding a space that resonates with your lifestyle
        and needs. Here are some essential factors to consider in your search:
      </p>
      <ul className="step3-list">
        <li>
          Location: Consider proximity to work, schools, amenities, and the
          neighborhood vibe.
        </li>
        <li>Price: Ensure the property falls within your budget.</li>
        <li>
          Size: The house should accommodate your family and lifestyle. Consider
          the number of bedrooms and bathrooms, kitchen size, and storage space.
        </li>
        <li>
          Future Growth: If you plan on growing your family or hosting extended
          family, consider a home that can cater to this future need.
        </li>
        <li>
          Resale Value: Even though you're buying the property to live in, it's
          wise to consider its potential resale value for the future.
        </li>
        <li>
          Condition: Pay attention to the property's condition, including
          potential renovation needs.
        </li>
      </ul>
      <p className="step3-text">
        Take your time when searching for the right house. Attend open houses,
        research online, and don’t rush the process. Work closely with your real
        estate agent who can provide valuable advice and assist you in finding a
        property that suits your preferences and needs.
      </p>
      <button onClick={handleShowProperties}>Show me the properties!</button>
    </div>
  );
}

// Properties content component
function PropertiesContent({
  properties,
  filter,
  handleFilterChange,
  handleBackClick,
  handleButtonClick,
  setShowCalculator,
  showCalculator,
}) {
  const handleCalculatorClose = () => {
    setShowCalculator(false);
  };

  return (
    <div className="step3-content">
      <button className="back-button" onClick={handleBackClick}>
        Back
      </button>
      <div className="filters">
        <input
          placeholder="Min Price"
          value={filter.minPrice}
          onChange={(e) => handleFilterChange("minPrice", e.target.value)}
        />
        <input
          placeholder="Max Price"
          value={filter.maxPrice}
          onChange={(e) => handleFilterChange("maxPrice", e.target.value)}
        />
        <input
          placeholder="Min Size"
          value={filter.minSize}
          onChange={(e) => handleFilterChange("minSize", e.target.value)}
        />
      </div>
      <div className="properties">
        {properties.map((property) => (
          <PropertyCard key={property._id} property={property} />
        ))}
        {!showCalculator ? (
          <div className="step1-info">
            <div className="step1-info-content">
              <img src={image} alt="Step 1" className="step1-img" />
              <button className="step1-button" onClick={handleButtonClick}>
                Calculate Mortgage
              </button>
            </div>
          </div>
        ) : (
          <Calculator onClose={handleCalculatorClose} />
        )}
      </div>
    </div>
  );
}

// Property card component
// function PropertyCard({ property }) {
//   return (
//     <div className="property-card">
//       <h2>{property.title}</h2>
//       <p>Price: {property.price}</p>
//       <p>Size: {property.size}</p>
//       <p>Rooms: {property.room}</p>
//       <img src={property.imgUrl} alt={property.title} />
//       <p>{property.description}</p>
//     </div>
//   );
// }

export default Step3Component;
