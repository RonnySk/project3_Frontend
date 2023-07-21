import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { API_URL } from "../../config/config.index";
import { AuthContext } from "../../context/auth.context";

function CreateMessenger() {
  const { user } = useContext(AuthContext);
  const [userId, setUserId] = useState(user._id);
  const [realEstateId, setrealEstateId] = useState("");
  const [propertyId, setPropertyId] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setPropertyId(location.state._id);
    setrealEstateId(location.state.userId);
  }, [location.state]);

  useEffect(() => {
    if (user) {
      setUserId(user._id);
    }
  }, [user]);

  const handleChat = async (e) => {
    const requestBody = {
      userId,
      realEstateId,
      propertyId,
    };

    axios
      .post(`${API_URL}/messenger/createmessenger`, requestBody)
      .then((response) => {
        const messengerId = response.data._id;
        console.log("inbox", messengerId);
        navigate(`/messenger/${messengerId}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Messenger</h1>

      <button type="submit" className="auth-btn" onClick={handleChat}>
        Chat Start
      </button>
    </div>
  );
}

export default CreateMessenger;
