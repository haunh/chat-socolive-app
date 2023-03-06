import "./App.css";
import io from "socket.io-client";
import { useState } from "react";
import Chat from "./Chat";

const socket = io.connect("https://api.haunh.com");

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("868459");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      setRoom('868459')
      socket.emit("join_room", room);
      
      setShowChat(true);
    }
  };

  return (
    <div className="App">
      {!showChat ? (
        <div className="chatContainer">
          <h3>Pls Input Username</h3>
          <input
            type="text"
            placeholder="Trưởng Thôn"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <button onClick={joinRoom}>Join A Socolive Chat</button>
        </div>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
  );
}

export default App;