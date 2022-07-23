import React from 'react';
import './style.css';

function timeString(date){
  return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

export function Comment({ comment, time, user, isMe }){
  const { avatar, username } = user;
  return (
    <div className={`comment ${isMe ? 'own-comment' : ''}`}>
      <div className="comment-avatar">{avatar}</div>
      <div className="comment-username">{username}</div>
      <div className="comment-time">{timeString(time)}</div>
      <div className="comment-text">{comment}</div>
    </div>
  );
}
