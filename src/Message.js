import { Card, CardContent, Typography } from "@material-ui/core";
import React, { forwardRef } from "react";
import "./message.css";


const Message = forwardRef(({ message, username }, ref) => {
  const isUser = username === message.user;

  return (
    <div ref={ref} className={`message ${isUser && "message__user"}`}>
      <Card className={isUser ? "message__userCard" : "message__guestCard"}>
        <CardContent>
          <Typography color="white" gutterBottom variant="h5" component="h2">
            {!isUser && `${message.user || 'Unknown User'}: ` }{message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Message;
