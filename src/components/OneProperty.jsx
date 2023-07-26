import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../config/config.index";
import { AuthContext } from "../context/auth.context";
import "../css/PropertyCard.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../css/OneProperty.css";
import "../App.css";
import sprite from "../images/sprite.svg";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";

function OneProperty() {
  const { user } = useContext(AuthContext);
  const [property, setProperty] = useState("");
  const [geoLocation, setGeoLocation] = useState({});
  const { property_id } = useParams();
  const navigate = useNavigate();

  const getProperty = async () => {
    try {
      const { data } = await axios.get(
        `${API_URL}/property/oneproperty/${property_id}`
      );
      const { oneProperty } = data;
      setProperty(oneProperty);
      const geoCodeAdress = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${oneProperty.street}+${oneProperty.propertyNumber}+${oneProperty.city}+${oneProperty.country}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
      );
      const geoCodeAdressLatLng =
        geoCodeAdress.data.results[0].geometry.location;

      setGeoLocation(geoCodeAdressLatLng);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProperty();
  }, []);

  // Maps config
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });

  const handleDelete = async () => {
    try {
      alert("Property removed successfully!");
      const { data } = await axios.delete(
        `${API_URL}/property/oneproperty/${property_id}`,
        property_id
      );
      navigate(`/realestateallproperties/${user._id}`);
    } catch (error) {
      console.log(error);
    }
  };

  if (!property) {
    return <p>Loading ...</p>;
  } else {
    return (
      <div className="property-details-container">
        <section>
          <Carousel
            showIndicators
            renderArrowNext={(clickHandler, hasNext) => {
              return (
                hasNext && (
                  <button
                    className="nav_btn nav_btn_right"
                    onClick={clickHandler}
                  >
                    <svg>
                      <use xlinkHref={sprite + "#right"}></use>
                    </svg>
                  </button>
                )
              );
            }}
            renderArrowPrev={(clickHandler, hasNext) => {
              return (
                hasNext && (
                  <button
                    onClick={clickHandler}
                    className="nav_btn nav_btn_left"
                  >
                    <svg>
                      <use xlinkHref={sprite + "#left"}></use>
                    </svg>
                  </button>
                )
              );
            }}
            transitionTime={310}
            swipeable={false}
            useKeyboardArrows={true}
          >
            {property.imgUrl.map((URL, index) => (
              <div className="slide">
                <img alt="sample_file" src={URL} key={index} />
              </div>
            ))}
          </Carousel>
        </section>
        <section className="property-details-section-title">
          <h1>{property.title}</h1>
          <p>{property.price} €</p>
        </section>
        <hr></hr>
        <section className="property-details-section-info">
          <p>
            <span>PROPERTY TYPE</span> {property.type}
          </p>
          <p>
            <span>BEDROOMS</span> {property.room}
          </p>
          <p>
            <span>BATHROOM</span> {property.bathroom}
          </p>
          <p>
            <span>SIZE</span> {property.size}m²
          </p>
          <p>
            <span>GARAGE</span> {property.garage}
          </p>
        </section>
        <hr></hr>
        <section className="property-details-section-description">
          <h2>Description</h2>
          <p>{property.description}</p>
        </section>
        <hr></hr>
        <section className="property-details-section-adress">
          {!isLoaded ? (
            <h1>Loading...</h1>
          ) : (
            <GoogleMap
              mapContainerClassName="map-container"
              center={geoLocation}
              zoom={15}
            >
              <MarkerF position={geoLocation} />
            </GoogleMap>
          )}
          <p>
            <span>ADRESS</span> {property.street}, {property.propertyNumber},{" "}
            {property.city}, {property.country}
          </p>
        </section>
        <hr></hr>
        {user.isAgent && (
          <div className="property-details-rea-btn">
            <div className="property-details-delete-btn">
              <Link
                className="dlt-upd-btn"
                to={`/updateproperty/${property._id}`}
              >
                Update
              </Link>
              <button
                type="submit"
                className="dlt-upd-btn"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
            <Link
              to={`/realestateallproperties/${user._id}`}
              className="dlt-upd-btn"
            >
              Back to your properties
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default OneProperty;
