/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

import './styles.css';

function CardItem({ item }) {
  return (
    <article className="card-item">
      <header>
        <img src={item.image} alt={item.name} />
        <div>
          <strong>{item.name}</strong>
          <span>Tamanho {item.size}</span>
        </div>
      </header>
      <p>{item.description}</p>
      <footer>
        <p>
          Preço
          <strong>{item.price}</strong>
        </p>
      </footer>
    </article>
  );
}
export default CardItem;
