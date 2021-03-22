/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
/* eslint-disable arrow-parens */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../Components/Header';
import Input from '../../Components/Input';
import api from '../../services/api';

import './styles.css';

export default function UserNew() {
  const history = useHistory();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [check, setCheck] = useState('');
  const [formStep, setFormStep] = useState(0);
  const completeFormStep = () => {
    setFormStep(cur => cur + 1);
  };

  function handleAddUser(e) {
    e.preventDefault();

    api
      .post('users', {
        id: Number,
        name,
        age,
        email,
        Score: 30,
      })
      .then(() => {
        alert('Cadastro realizado com sucesso. Você ganhou 30 pontos. ');
        history.push('/');
      })
      .catch(() => {
        alert('erro no cadastro!');
      });
  }

  const renderButton = () => {
    if (formStep > 3) {
      return undefined;
    }
    if (formStep === 3) {
      return (
        <footer>
          <button onClick={(completeFormStep, handleAddUser)} type="button">
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
    <div id="page-userNew-list" className="container">
      <Header
        title="Que incrível ter você aqui."
        description="Acumule pontos e troque por prêmios! O primeiro passo é preencher esse formulário."
      />
      <main>
        <form onSubmit={handleAddUser}>
          <fieldset>
            {formStep === 0 && (
              <section>
                <legend>Informação Pessoal</legend>
                <Input
                  name="name"
                  label="Nome Completo"
                  value={name}
                  onChange={e => {
                    setName(e.target.value);
                  }}
                />
              </section>
            )}
            {formStep === 1 && (
              <section>
                <legend>Informação Pessoal</legend>
                <Input
                  name="age"
                  label="Idade"
                  value={age}
                  onChange={e => {
                    setAge(e.target.value);
                  }}
                />
              </section>
            )}
            {formStep === 2 && (
              <section>
                <legend>Informação Pessoal</legend>
                <Input
                  name="email"
                  label="E-mail"
                  value={email}
                  onChange={e => {
                    setEmail(e.target.value);
                  }}
                />
              </section>
            )}
            {formStep === 3 && (
              <section>
                <legend>Parabéns!</legend>
              </section>
            )}
          </fieldset>
          {renderButton()}
        </form>
      </main>
    </div>
  );
}
