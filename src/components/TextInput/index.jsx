import React, { useEffect } from 'react';
import './style.css';

export function TextInput({ value, onChange }){

  useEffect(()=>{
    if(value !== null && typeof value !== 'string'){
      throw new Error('Value must bestring');
    }
  }, [value]);

  return (
    <input
       className="text-input"
       value={value || ''}
       onChange={e=>onChange(e.target.value)}
     />
  );
}
