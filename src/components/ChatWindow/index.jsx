import React, { useState } from 'react';
import {CommentThread} from 'components/CommentThread';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function User(username, avatar, time, isMe){
  return {
    username,
    avatar: <FontAwesomeIcon icon={avatar} />,
  };
}

function commentOf(user, comment, time, isMe){
  return {
    user,
    comment,
    time,
    isMe,
  };
}

export function ChatWindow(){
const [users, setUsers] = useState([
  User('Test User', faUser, new Date(), true)
]);
  const [user, setUser] = useState(users[0]);
  const [comments, setComments] = useState([]);
  const [usersTyping, setUsersTyping] = useState([]);
  console.log(comments);
  console.log(users);
  return (
    <CommentThread
      usersTyping={usersTyping}
      onSubmit={comment=>setComments([...comments, commentOf(user, comment, new Date(), true)])}
      comments={comments}
    />
  );
}
