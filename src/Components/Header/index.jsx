import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/LogoBrain.png';
import './styles.css';

// eslint-disable-next-line react/prop-types
export default function Header({ title, description }) {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <FontAwesomeIcon icon="arrow-left" />
        </Link>
        <img src={logoImg} alt="logo" />
      </div>
      <div className="header-content">
        <strong>{title}</strong>
        {description && <p>{description}</p>}
      </div>
    </header>
  );
}
