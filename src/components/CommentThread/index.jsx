import React, { createElement, useState } from 'react';
import {Comment} from './Comment';
import {NewComment} from './NewComment';
import './style.css';

export function CommentThread({ comments, onSubmit, usersTyping }){

  const [comment, setComment] = useState(null);

  const typingMessage = usersTyping.length ? (
    <div className="comment-thread-user-typing-message">
      {`${usersTyping.join(',')} is typing ...`}
    </div>
  ) : null;

  const commentElements = comments.length ? (
    <div className="comment-thread-comments">
      {comments.map(c=>createElement(Comment, c))}
    </div>
) : null;

  return (
    <div className="comment-thread">
      {commentElements
        || <div className="comment-thread-no-comments">No Comments</div>
      }
      {typingMessage}
      <NewComment comment={comment} onChange={setComment} onSubmit={onSubmit} />
    </div>
  );
}
