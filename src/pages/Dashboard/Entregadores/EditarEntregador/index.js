import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import rc from 'randomcolor';
import { useParams, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { MdNavigateBefore, MdCheck } from 'react-icons/md';
import {
  sendAvatarUrl,
  sendAvatarId,
} from '../../../../store/modules/courier/actions';

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

export default function EditarEntregador() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [courierExists, setCourierExists] = useState(false);
  const [courier, setCourier] = useState({});
  const [allow, setAllow] = useState(true);
  const [avatarSettings, setAvatarSettings] = useState({});
  const avatar_id = useSelector((state) => state.courier.id);

  useEffect(() => {
    if (courier.name) {
      const initials = courier.name.split(' ').map((word) => word[0]);

      const seed = initials.reduce(
        (total, value) => total * value.charCodeAt(),
        1
      );

      const colorAvatar = rc({ luminosity: 'dark', seed });
      setAvatarSettings({ color: colorAvatar, initials });

      if (courier.avatar) dispatch(sendAvatarUrl(courier.avatar.url));
    }
  }, [courier]);

  useEffect(() => {
    async function checkCourier() {
      try {
        const request = `couriers/${id}`;
        const response = await api.get(request);

        setCourier(response.data);

        setEmail(response.data.email);
        setName(response.data.name);
        if (response.data.avatar)
          dispatch(sendAvatarId(response.data.avatar.id));
      } catch (err) {
        toast.error('O usuario nao existe!');
        setTimeout(() => history.push('/couriers'), timeToast);
      }
    }

    checkCourier();
  }, []);

  useEffect(() => {
    async function checkCourierExists() {
      const request = `couriers/?email=${email}`;

      const response = await api.get(request);

      const { data } = response;

      setCourierExists(!!(email && data.length > 0 && email !== courier.email));
    }

    checkCourierExists();
  }, [email, courier]);

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
      const response = await api.put(`couriers/${id}`, data);

      if (response.status !== 200) {
        toast.error('Erro');
        setAllow(true);
      } else {
        toast.success('Entregador editado com sucesso');
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
            <Title>Edição de entregadores</Title>

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
                <AvatarInput name="avatar_id" edit settings={avatarSettings} />
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
