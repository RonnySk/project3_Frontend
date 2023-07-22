import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../config/config.index";
import { AuthContext } from "../context/auth.context";

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
    <div>
      <h1>Your Messages, {user.name}</h1>

      {allmessenger.length === 0 ? (
        <div>
          <p>You don't have any Messages</p>
          {user.isAgent ? (
            <Link to="/realEstateHome">Back to home</Link>
          ) : (
            <Link to="/home">Back to home</Link>
          )}
        </div>
      ) : (
        allmessenger.map((oneMessenger, index) => {
          return (
            <div key={index}>
              <ul>
                <li>
                  <p>{oneMessenger.userId.name}</p>
                  <Link to={`/messenger/${oneMessenger._id}`}>
                    Open the messages
                  </Link>
                </li>
              </ul>
            </div>
          );
        })
      )}
    </div>
  );
}

export default AllMessengersPage;
