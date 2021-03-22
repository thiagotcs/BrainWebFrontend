/* eslint-disable no-undef */
/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-shadow */
/* eslint-disable no-spaced-func */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-alert */
/* eslint-disable arrow-parens */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import Header from '../../Components/Header';
import CardItem from '../../Components/CardItem';
import Input from '../../Components/Input';
import api from '../../services/api';
import Pizzaman2 from '../../assets/images/PizzaMan2.png';

import './styles.css';

export default function Home() {
  const history = useHistory();

  const [foods, setFoods] = useState([]);
  const [name, setName] = useState('');

  const [formData, setFormData] = useState('');
  const [formDataBox, setFormDataBox] = useState([]);
  const [formDataBtn, setFormDataBtn] = useState('');

  const handleChange = e => {
    const radioBox = e.target.value;
    setFormData(radioBox);
  };
  const handleChangeBox = e => {
    const checkBox = e.target.value;
    setFormDataBox([checkBox, ...formDataBox]);
  };

  const [formStep, setFormStep] = useState(0);
  const completeFormStep = () => {
    setFormStep(cur => cur + 1);
  };

  useEffect(() => {
    api.get('Foods').then(response => {
      const total = response.data;

      setFoods(total);
    });
  }, []);

  function handleAddType(item) {
    setFormDataBtn(item);
    console.log('>>>>>>>>>>>>>>>item', item);
  }

  function handleAddPedido(e) {
    e.preventDefault();

    api
      .post('solicitation', {
        id: Number,
        name: formDataBtn.name,
        image: formDataBtn.image,
        price: formDataBtn.price,
        description: formDataBox,
        massaDescription: formData,
        size: formDataBtn.size,
        score: formDataBtn.score,
      })
      .then(() => {
        alert(`Pedido realizado com sucesso. Você ganhou ${formDataBtn.score}  pontos.`);
        history.push('/');
      })
      .catch(() => {
        alert('erro ao realizar seu pedido!');
      });
  }

  const renderButton = () => {
    if (formStep > 3) {
      return undefined;
    }
    if (formStep === 3) {
      return (
        <footer>
          <button onClick={(completeFormStep, handleAddPedido)} type="button">
            Salvar
          </button>
        </footer>
      );
    }

    return (
      <footer>
        <button onClick={completeFormStep} type="button">
          Próximo
        </button>
      </footer>
    );
  };

  return (
    <div id="page-home-list" className="container">
      <Header title="Estes são os sabores disponíveis" />
      <main>
        <form onSubmit={handleAddPedido}>
          <fieldset>
            {formStep === 0 && (
              <section>
                <legend>Recomendação da Semana</legend>
                {foods.map(item => (
                  <button type="button" onClick={() => handleAddType(item)}>
                    <CardItem key={item.id} item={item} />
                  </button>
                ))}
              </section>
            )}
            {formStep === 1 && (
              <section>
                <legend>Escolha a sua Preferencia</legend>
                <div className="boxRadio">
                  <label>Massa sem borda recheada</label>

                  <input
                    type="radio"
                    name="gender"
                    value="Massa sem borda recheada"
                    onChange={handleChange}
                  />
                </div>
                <div className="boxRadio">
                  <label>Borda recheada de cream cheese</label>
                  <input
                    type="radio"
                    name="gender"
                    value="Borda recheada de cream cheese"
                    onChange={handleChange}
                  />
                </div>
                <div className="boxRadio">
                  <label>Borda recheada de chocolate</label>
                  <input
                    type="radio"
                    name="gender"
                    value="Borda recheada de chocolate"
                    onChange={handleChange}
                  />
                </div>
                <div className="boxRadio">
                  <label>Borda recheada de cheddar</label>
                  <input
                    type="radio"
                    name="gender"
                    value="Borda recheada de cheddar"
                    onChange={handleChange}
                  />
                </div>
                <div className="boxRadio">
                  <label>Borda recheada de catupiry</label>
                  <input
                    type="radio"
                    name="gender"
                    value="Borda recheada de catupiry"
                    onChange={handleChange}
                  />
                </div>
              </section>
            )}
            {formStep === 2 && (
              <section>
                <legend>Escolha o molho da sua Preferencia</legend>
                <div className="boxCheck">
                  <label>Molho Caipira</label>
                  <input
                    type="checkbox"
                    name="checkbox"
                    value="Molho Caipira"
                    onChange={handleChangeBox}
                  />
                </div>
                <div className="boxCheck">
                  <label>Cream Cheese</label>
                  <input
                    type="checkbox"
                    name="checkbox"
                    value="Cream Cheese"
                    onChange={handleChangeBox}
                  />
                </div>
                <div className="boxCheck">
                  <label>Cheddar Cremoso</label>
                  <input
                    type="checkbox"
                    name="checkbox"
                    value="Cheddar Cremoso"
                    onChange={handleChangeBox}
                  />
                </div>
                <div className="boxCheck">
                  <label>Molho Barbecue</label>
                  <input
                    type="checkbox"
                    name="checkbox"
                    value="Molho Barbecue"
                    onChange={handleChangeBox}
                  />
                </div>
                <div className="boxCheck">
                  <label>Molho Agridoce</label>
                  <input
                    type="checkbox"
                    name="checkbox"
                    value="Molho Agridoce"
                    onChange={handleChangeBox}
                  />
                </div>
                <div className="boxCheck">
                  <label>molho Mostarda e mel</label>
                  <input
                    type="checkbox"
                    name="checkbox"
                    value="molho Mostarda e mel"
                    onChange={handleChangeBox}
                  />
                </div>
                <div className="boxCheck">
                  <label>Ketchup</label>
                  <input
                    type="checkbox"
                    name="checkbox"
                    value="Ketchup"
                    onChange={handleChangeBox}
                  />
                </div>
              </section>
            )}
            {formStep === 3 && (
              <section>
                <legend>Parabéns!</legend>
                <div style={{ textAlign: 'center' }}>
                  <img src={Pizzaman2} alt="pizzaman" height="300px" />
                  <div style={{ fontFamily: 'Open Sans Condensed', fontSize: 35 }}>
                    We have received your order, Thank you
                  </div>
                  <div style={{ fontFamily: 'Comfortaa' }}>
                    Order #{Math.round(Math.random() * 100000)}
                  </div>
                  <div style={{ fontFamily: 'Indie Flower', fontSize: 20 }}>
                    Will be ready in 20-30 min.
                  </div>
                </div>
              </section>
            )}
          </fieldset>
          {renderButton()}
        </form>
      </main>
    </div>
  );
}
