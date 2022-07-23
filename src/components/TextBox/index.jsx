import React, { useEffect } from 'react';
import './style.css';

export function TextBox({ value, onChange, placeholder }){

  useEffect(()=>{
    if(value !== null && typeof value !== 'string'){
      throw new Error('Value must bestring');
    }
  }, [value]);

  return (
    <textarea
      placeholder={placeholder}
      className="text-box"
      value={value || ''}
      onChange={e=>onChange(e.target.value)}
    />
  );
}
