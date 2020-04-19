import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

import { MdNavigateBefore, MdCheck } from 'react-icons/md';

import api from '../../../../services/api';

import Header from '../../../../components/Header';

import timeToast from '../../../../config/timeToast';

import AvatarInput from '../AvatarInput';

import history from '../../../../services/history';

import {
  Content,
  Wrapper,
  Title,
  Save,
  Inputs,
  Text,
  FormWrapper,
  GoBack,
  NoPhoto,
} from './styles';

export default function CadastrarEntregador() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [courierExists, setCourierExists] = useState(false);
  const [allow, setAllow] = useState(true);
  const avatar_id = useSelector((state) => state.courier.id);

  useEffect(() => {
    async function checkCourierExists() {
      const request = `couriers/?email=${email}`;

      const response = await api.get(request);

      const { data } = response;

      setCourierExists(!!(email && data.length > 0));
    }

    checkCourierExists();
  }, [email]);

  async function handleSubmit(e) {
    e.preventDefault();
    if (courierExists) {
      return toast.error('E-mail ja cadastrado');
    }

    const data = {
      name,
      email,
      avatar_id,
    };
    if (allow) {
      setAllow(false);
      const response = await api.post('couriers', data);

      if (response.status !== 200) {
        toast.error('Erro');
        setAllow(true);
      } else {
        toast.success('Entregador cadastrado com sucesso');
        setTimeout(() => history.push('/couriers'), timeToast);
      }
    }
    return 0;
  }

  return (
    <Wrapper>
      <Header entregadores />

      <Content>
        <form onSubmit={(e) => handleSubmit(e)}>
          <header>
            <Title>Cadastro de entregadores</Title>

            <section className="buttons">
              <Link to="/couriers">
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
            <section className="foto">
              <NoPhoto>
                <AvatarInput name="avatar_id" />
              </NoPhoto>
            </section>
            <section className="nome">
              <span>Nome</span>
              <Inputs
                name="name"
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </section>
            <section className="email">
              <span>E-mail</span>
              <Inputs
                name="email"
                type="email"
                placeholder="example@rocketseat.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {courierExists && (
                <span className="warning">E-mail já cadastrado!</span>
              )}
            </section>
          </FormWrapper>
        </form>
      </Content>
    </Wrapper>
  );
}
