import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../../config/config.index";
import { AuthContext } from "../../context/auth.context";

function Messenger() {
  const { user } = useContext(AuthContext);
  const [sender, setSender] = useState(user._id);
  const [message, setMessage] = useState("");
  const { messengerId } = useParams();
  const [inbox, setInbox] = useState([]);

  const getAllMessages = () => {
    axios
      .get(`${API_URL}/messenger/message/${messengerId}`)
      .then((response) => {
        console.log("all msgs", response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllMessages();
  }, []);

  console.log("messengerId", messengerId);

  const handleMessage = (e) => setMessage(e.target.value);

  const handleAddMessageSubmit = async (e) => {
    e.preventDefault();

    const requestBody = { sender, message, messengerId };

    axios
      .post(`${API_URL}/messenger/message`, requestBody)
      .then((response) => {
        // const { newProperty } = response.data;
        // navigate(`/oneproperty/${newProperty._id}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Messenger</h1>
      <form onSubmit={handleAddMessageSubmit} className="auth-form">
        <input
          type="text"
          name="message"
          placeholder="Type your message"
          value={message}
          onChange={handleMessage}
          className="auth-input"
        />

        <button type="submit" className="auth-btn">
          Send
        </button>
      </form>
    </div>
  );
}

export default Messenger;
