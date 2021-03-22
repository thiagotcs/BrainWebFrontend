/* eslint-disable no-console */
/* eslint-disable arrow-parens */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logoImg from '../../assets/images/LogoBrain.png';
import landingImg from '../../assets/images/PizzaMan.png';

import api from '../../services/api';

import './styles.css';

export default function Landing() {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get('connections').then(response => {
      const { total } = response.data;

      setTotalConnections(total);
    });
  }, []);

  return (
    <>
      <div id="page-landing">
        <div id="page-landing-content" className="container">
          <div className="logo-container">
            <img src={logoImg} alt="Logo Brain Quero Pizza Online" />
            <h2>Nunca foi tão fácil pedir</h2>
          </div>

          <img src={landingImg} alt="Pizza Man" className="hero-image" />

          <div className="buttons-container">
            <Link to="/usernew" className="userNew">
              <FontAwesomeIcon icon="user-plus" />
              Novo
            </Link>

            <Link to="/home" className="pedido">
              <FontAwesomeIcon icon="pizza-slice" />
              Pedido
            </Link>
          </div>
          <span className="total-connections">
            Total de {totalConnections} pedidos Delivery <FontAwesomeIcon icon="heart" />
          </span>
        </div>
      </div>
    </>
  );
}
