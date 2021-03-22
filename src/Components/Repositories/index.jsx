import React from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line import/no-unresolved
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// eslint-disable-next-line import/no-unresolved
import cursoImg from '../../assets/images/cursoImg.svg';
import shoppingCart from '../../assets/icons/shopping-cart.svg';
import addToCartImg from '../../assets/icons/shopping-bag.svg';

import { Container, Wrapper } from './styles';

export default function Repositories() {
  return (
    <Wrapper>
      <Container>
        <Link to="/">
          <img src={cursoImg} alt="curso" />
          <div>
            <strong>Apple Watch Series 4 GPS</strong>
            <span>By Apple</span>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industrys standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="containerRight">
            <span className="star">
              3.4
              <FontAwesomeIcon icon="star" />
            </span>
            <article>
              <strong>$399</strong>
            </article>
            <span>
              <img src={shoppingCart} alt="shopping Cart" className="Cartshopping" />
              Free Shipping
            </span>
            <div className="buttonContainer">
              <button type="button">
                <FontAwesomeIcon icon="heart" />
                WISHLIST
              </button>
              <button type="button">
                <img src={addToCartImg} alt="add to cart" />
                ADD TO CART
              </button>
            </div>
          </div>
        </Link>
      </Container>
    </Wrapper>
  );
}
