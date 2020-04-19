import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useParams, Link } from 'react-router-dom';

import { MdNavigateBefore, MdCheck } from 'react-icons/md';

import Select from '../../../../components/Select';

import api from '../../../../services/api';

import Header from '../../../../components/Header';

import history from '../../../../services/history';

import timeToast from '../../../../config/timeToast';

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

export default function EditarEncomenda() {
  const { id } = useParams();

  const [recipients, setRecipients] = useState([]);
  const [couriers, setCouriers] = useState([]);
  const [recipient, setRecipient] = useState('');
  const [courier, setCourier] = useState('');
  const [product, setProduct] = useState('');
  const [defaultRecipient, setDefaultRecipient] = useState(''); // If changes, crashes materialize
  const [defaultCourier, setDefaultCourier] = useState(''); // If changes, crashes materialize

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

    async function populate() {
      const request = `handouts/${id}`;
      const response = await api.get(request);

      const {
        courier: courierObj,
        recipient: recipientObj,
        product: productName,
      } = response.data;

      setDefaultRecipient(recipientObj);
      setDefaultCourier(courierObj);
      setProduct(productName);
    }

    loadRecipients();
    loadCouriers();
    populate();

    setRecipient(defaultRecipient);
    setCourier(defaultCourier);
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
      recipient_id: recipient ? recipient.id : defaultRecipient.id,
      deliveryman_id: courier ? courier.id : defaultCourier.id,
      product,
      edit: true,
    };

    const response = await api.put(`handouts/${id}`, data);

    if (response.status !== 200) {
      toast.error('Erro');
    } else {
      toast.success('Produto editado com sucesso');
      setTimeout(() => history.push('/dashboard'), timeToast);
    }
    return 0;
  }

  return (
    <Wrapper>
      <Header encomendas />

      <Content>
        <form onSubmit={(e) => handleSubmit(e)}>
          <header>
            <Title>Cadastro de Encomendas</Title>

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
                    placeholder={recipient.name}
                    label={defaultRecipient.name}
                    data={recipients}
                    inputValue={recipient.name}
                    onChange={(event, value) => handleRecipientChange(value)}
                  />
                </section>
                <section className="entregador">
                  <span>Entregador</span>
                  <Select
                    width="100%"
                    placeholder={courier.name}
                    label={defaultCourier.name}
                    data={couriers}
                    inputValue={courier.name}
                    onChange={(event, value) => handleCourierChange(value)}
                  />
                </section>
              </section>
              <section className="second-line">
                <span>Nome do produto</span>
                <Inputs
                  name="product"
                  type="text"
                  placeholder={product}
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
