import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Wrapper = styled.div`
  display: flex;
  left: 0;
  top: 0;
`;
export const Container = styled.div`
  margin-top: 30px;
  max-width: 60vw;

  a {
    background: #fff;
    border-radius: 8px;
    width: 100%;
    padding: 10px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;

    img {
      width: 213px;
      height: 210px;
      border-radius: 5px;
    }
    .Cartshopping {
      width: 1.6rem;
      height: 1.2rem;
    }
    .containerRight {
      border-left: 1px solid var(--color-mid400);
    }
    div {
      margin-left: 16px;

      span {
        margin-left: 2rem;
      }

      article {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        flex-direction: row-reverse;
        margin-top: 0;

        strong {
          margin-right: 7rem;
        }
      }
      .star {
        display: flex;
        color: var(--color-secondary-yellow500);
        margin-left: 14rem;
        margin-top: -2rem;
      }

      strong {
        font-size: 20px;
        color: #666;
        display: block;
      }
      span {
        font-size: 16px;
        color: #6565;
      }
      p {
        font-size: 14px;
        color: #6565;
      }

      button {
        width: 16rem;
        height: 4.6rem;
        background: var(--color-secondary-green500);
        color: var(--color-button-text);
        border: 0;
        border-radius: 0.8rem;
        cursor: pointer;
        font: 700 1.4rem Archivo;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.2s;
        margin: 0.6rem;

        &:hover {
          background: var(--color-secondary-dark);
        }
        svg {
          margin-right: 2rem;
        }
        img {
          margin-right: 1rem;
          width: 1.4rem;
        }
      }
    }
  }
`;
