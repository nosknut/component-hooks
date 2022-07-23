import React from 'react';
import {TextInput} from 'components/TextInput';
import './style.css';

export function NewComment({ comment, onChange, onSubmit }){
  return (
    <div className="new-comment">
        <TextInput
          value={comment}
          placeholder="Type a message ..."
          onChange={onChange}
        />
        <button onClick={()=>onSubmit(comment)}>Send</ button>
    </div>
  );
}
