import React, { useState } from "react";
import axios from "axios";
import "../css/ChatBot.css";
import RobotIcon from "../images/robot.jpg"; // Import the robot image here

function Chatbot() {
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [chatOpen, setChatOpen] = useState(false); // Add a new state to toggle chat

  const BASE_URL = process.env.REACT_APP_API_BASE_URL || window.location.protocol + "//" + window.location.hostname + ":5005";

  const handleSend = async () => {
    setUserInput("");
    setMessages((prevMessages) => [...prevMessages, { user: "user", text: userInput }]);

    try {
      setLoading(true);

      const response = await axios.post(`${BASE_URL}/api/chatbot`, {
        message: userInput,
      });

      const botResponse = response.data;

      setMessages((prevMessages) => [...prevMessages, { user: "bot", text: botResponse }]);
    } catch (error) {
      console.error("Error while fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chatbot-container">
      <img src={RobotIcon} alt="Robot Icon" className="robot-image" onClick={() => setChatOpen(!chatOpen)} />
      {chatOpen && (
        <div className="chat-interface">
          <div className="messages-container">
            {messages.map((message, index) => (
              <p key={index} className={message.user}>
                {message.text}
              </p>
            ))}
          </div>
          <div className="user-input-container">
            <input
              className="user-input"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              disabled={loading}
              placeholder="Type your message..."
            />
            <button onClick={handleSend} disabled={loading || userInput.trim() === ""}>
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbot;
