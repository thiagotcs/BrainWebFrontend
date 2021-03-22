/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import './styles.css';

function Input({ label, name, ...res }) {
  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} {...res} />
    </div>
  );
}

export default Input;
