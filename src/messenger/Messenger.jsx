import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { API_URL } from "../config/config.index";
import { AuthContext } from "../context/auth.context";
import "../css/Messenger.css";

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

  console.log("property", property);

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
        <Link to={`/allmessenger/${user._id}`} className="back-button">
          Back to Messages
        </Link>
        {property.length === 0 ? (
          <p>loading property details</p>
        ) : (
          <div className="property-chat-container">
            <img src={property.imgUrl[0]} alt="house"></img>
            <div className="property-chat-info">
              <h3>{property.title}</h3>
              <p>
                <span>Street:</span> {property.street}
              </p>
              <p>
                <span>Price:</span> €{property.price}
              </p>
            </div>
          </div>
        )}
        <div>
          {inbox &&
            inbox.map((oneMessage, index) => {
              return (
                <div key={index}>
                  {!oneMessage.sender.isAgent ? (
                    <div className="message-container-left">
                      <div className="left-side-message">
                        <p>{oneMessage.message}</p>
                        <p className="message-sender-name">
                          {oneMessage.sender.name}
                        </p>
                        <small className="message-date-left">
                          {oneMessage.created_at.slice(0, 10)}{" "}
                          {oneMessage.created_at.slice(11, 16)}
                        </small>
                      </div>
                    </div>
                  ) : (
                    <div className="message-container-right">
                      <div className="right-side-message">
                        <p>{oneMessage.message}</p>
                        <p className="message-sender-name">
                          {oneMessage.sender.name}
                        </p>
                        <small className="message-date-right">
                          {oneMessage.created_at.slice(0, 10)}{" "}
                          {oneMessage.created_at.slice(11, 16)}
                        </small>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
        </div>
        <form className="messenger-form" onSubmit={handleAddMessageSubmit}>
          <input
            type="text"
            name="message"
            placeholder="Type your message"
            value={message}
            onChange={handleMessage}
            className="messenger-input"
          />

          <button type="submit" className="messenger-btn">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Messenger;
