import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../../config/config.index";
import { AuthContext } from "../../context/auth.context";
import "../../css/Messenger.css";

function Messenger() {
  const { user } = useContext(AuthContext);
  const [sender, setSender] = useState(user._id);
  const [message, setMessage] = useState("");
  const { messenger_id } = useParams();
  const [inbox, setInbox] = useState([]);
  const [property, setProperty] = useState([]);

  const getAllMessages = async () => {
    try {
      const { data } = await axios.get(
        `${API_URL}/messenger/message/${messenger_id}`
      );

      const { messages } = data;
      const { propertyId } = data;

      setProperty(propertyId);
      setInbox(messages);

      console.log("propertyId", propertyId);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllMessages();
  }, []);

  console.log("inbox before nem message", inbox);

  const handleMessage = (e) => setMessage(e.target.value);

  const handleAddMessageSubmit = async (e) => {
    e.preventDefault();

    const requestBody = { sender, message, messenger_id };

    axios
      .post(`${API_URL}/messenger/message`, requestBody)
      .then((response) => {
        const newMessages = response.data;
        newMessages.map((message) => setInbox([...inbox, message]));

        console.log("response from post after message", newMessages);
      })
      .catch((error) => {
        console.log(error);
      });
    setMessage("");
  };

  return (
    <div className="messenger-bcg">
      <div className="messenger-container">
        {property && (
          <div className="property-chat-container">
            <img src={property.imgUrl} alt="house"></img>
            <div className="property-chat-info">
              <h3>{property.title}</h3>
              <p>Street: {property.street}</p>
              <p>Price: {property.price}</p>
            </div>
          </div>
        )}
        <div className="inbox">
          {inbox &&
            inbox.map((oneMessage, index) => {
              return (
                <div key={index}>
                  {!oneMessage.sender.isAgent ? (
                    <div className="left-side">
                      <p>{oneMessage.message}</p>
                      <p>{oneMessage.sender.name}</p>
                      <small>
                        {oneMessage.created_at.slice(0, 10)}{" "}
                        {oneMessage.created_at.slice(11, 16)}
                      </small>
                    </div>
                  ) : (
                    <div className="right-side">
                      <p>{oneMessage.message}</p>
                      <p>{oneMessage.sender.name}</p>
                      <small>
                        {oneMessage.created_at.slice(0, 10)}{" "}
                        {oneMessage.created_at.slice(11, 16)}
                      </small>
                    </div>
                  )}
                </div>
              );
            })}
        </div>
        <form onSubmit={handleAddMessageSubmit}>
          <input
            type="text"
            name="message"
            placeholder="Type your message"
            value={message}
            onChange={handleMessage}
            className="messenger-input"
          />

          <button type="submit" className="auth-btn">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Messenger;
