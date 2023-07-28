import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../config/config.index";
import { AuthContext } from "../context/auth.context";
import "../css/AllMessagesPage.css";

function AllMessengersPage() {
  const { user } = useContext(AuthContext);
  const { user_id } = useParams();
  const [allmessenger, setAllMessenger] = useState([]);
  const navigate = useNavigate();

  console.log("userId", user_id);

  const getAllMessengers = () => {
    const requestBody = {
      user_id,
    };
    axios
      .get(`${API_URL}/messenger/allmessenger/${user_id}`, requestBody)
      .then((response) => {
        setAllMessenger(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllMessengers();
  }, []);

  console.log("all messengers", allmessenger);

  return (
    <div className="allMessengers-card-container">
      <div className="allMessengers-container">
        <h1>Messages</h1>

        {allmessenger.length === 0 ? (
          <div className="noMessage-container">
            <p>You don't have any Messages</p>
            {user.isAgent ? (
              <Link className="noMessage-container-link" to="/realEstateHome">
                Back to home
              </Link>
            ) : (
              <Link className="noMessage-container-link" to="/home">
                Back to home
              </Link>
            )}
          </div>
        ) : (
          allmessenger.map((oneMessenger, index) => {
            return (
              <div className="messenger-card-container" key={index}>
                <img src={oneMessenger.propertyId.imgUrl[0]} alt="house"></img>
                <div className="messenger-card-info">
                  <h2>{oneMessenger.propertyId.title}</h2>
                  <Link
                    className="openMessenger-link"
                    to={`/messenger/${oneMessenger._id}`}
                  >
                    Open the Messages
                  </Link>
                </div>
              </div>
            );
          })
        )}
        {user.isAgent ? (
          <Link className="msg-back-button" to="/realEstateHome">
            Back
          </Link>
        ) : (
          <Link className="msg-back-button" to="/steps">
            Back
          </Link>
        )}
      </div>
    </div>
  );
}

export default AllMessengersPage;
