import "./App.css";
import React, { useEffect, useState } from "react";
import { Button, FormControl, Input, InputLabel ,IconButton} from "@material-ui/core";

import Message from "./Message";
import { db } from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState("");

  const sendMessage = (event) => {
    event.preventDefault();
    db.collection("messages").add({
      user: user,
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  useEffect(() => {
    const userName = prompt("Please Enter User Name");
    setUser(userName);
  }, []);

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp","desc")
      .onSnapshot((snap) => {
        //console.log(snap.docs)
        const messages = snap.docs.map((doc) => {
          return {
            id: doc.id,
            message: doc.data().message,
            user: doc.data().user,
          };
        });
        setMessages(messages);
      });
  }, []);
  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" />
      <h1>Welcome to Messenger App🚀 !</h1>
    
      <form className="app__form">
        <FormControl className="app__formControl">
          <InputLabel>Type a message</InputLabel>
          <Input
          className="app__input"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          
          <IconButton
          className="app__iconButton"
            color="primary"
            variant="contained"
            type="submit"
            onClick={sendMessage}
            disabled={!input}
           
          >
            <SendIcon/>
          </IconButton>
        </FormControl>
      </form>

      <FlipMove>
        {messages.map((message) => {
          return <Message message={message} username={user} key={message.id} />;
        })}
      </FlipMove>
    </div>
  );
}

export default App;
