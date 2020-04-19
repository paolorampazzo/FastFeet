import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

import { MdNavigateBefore, MdCheck } from 'react-icons/md';

import Select from '../../../../components/Select';

import api from '../../../../services/api';

import Header from '../../../../components/Header';

import timeToast from '../../../../config/timeToast';

import history from '../../../../services/history';

import {
  Content,
  Wrapper,
  Title,
  Forms,
  Save,
  Inputs,
  Text,
  FormWrapper,
  GoBack,
} from './styles';

export default function CadastrarEncomendas() {
  const [recipients, setRecipients] = useState([]);
  const [couriers, setCouriers] = useState([]);
  const [recipient, setRecipient] = useState('');
  const [courier, setCourier] = useState('');
  const [product, setProduct] = useState('');
  const [allow, setAllow] = useState(true);

  useEffect(() => {
    async function loadRecipients() {
      const request = recipient
        ? `recipients/?name=${recipient}&all=true`
        : `recipients/?all=true`;
      const response = await api.get(request);

      const { data } = response;

      setRecipients(data);
    }

    async function loadCouriers() {
      const request = courier
        ? `couriers/?name=${courier}&all=true`
        : `couriers/?all=true`;
      const response = await api.get(request);

      const { data } = response;

      setCouriers(data);
    }

    loadRecipients();
    loadCouriers();
  }, []);

  function handleRecipientChange(value) {
    setRecipient(value);
  }

  function handleCourierChange(value) {
    setCourier(value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const data = {
      recipient_id: recipient.id,
      deliveryman_id: courier.id,
      product,
    };

    if (allow) {
      setAllow(false);
      const response = await api.post('handouts', data);

      if (response.status !== 200) {
        toast.error('Erro');
        setAllow(true);
      } else {
        toast.success('Produto cadastrado com sucesso');
        setTimeout(() => history.push('/dashboard'), timeToast);
      }
    }
    return 0;
  }

  return (
    <Wrapper>
      <Header encomendas />

      <Content>
        <form onSubmit={(e) => handleSubmit(e)}>
          <header>
            <Title>Cadastro de encomendas</Title>

            <section className="buttons">
              <Link to="/encomendas">
                <GoBack>
                  <MdNavigateBefore size={20} color="#FFFFFF" />
                  <Text>VOLTAR</Text>
                </GoBack>
              </Link>
              <Save type="submit">
                <MdCheck size={20} color="#FFFFFF" />
                <Text>SALVAR</Text>
              </Save>
            </section>
          </header>
          <FormWrapper>
            <Forms>
              <section className="first-line">
                <section className="destinatario">
                  <span>Destinatário</span>
                  <Select
                    width="100%"
                    placeholder="Ludwig van Beethoven"
                    data={recipients}
                    inputValue={recipient}
                    onChange={(event, value) => handleRecipientChange(value)}
                  />
                </section>
                <section className="entregador">
                  <span>Entregador</span>
                  <Select
                    width="100%"
                    placeholder="John Doe"
                    data={couriers}
                    inputValue={courier}
                    onChange={(event, value) => handleCourierChange(value)}
                  />
                </section>
              </section>
              <section className="second-line">
                <span>Nome do produto</span>
                <Inputs
                  name="product"
                  type="text"
                  placeholder="Yamaha SX7"
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                />
              </section>
            </Forms>
          </FormWrapper>
        </form>
      </Content>
    </Wrapper>
  );
}
