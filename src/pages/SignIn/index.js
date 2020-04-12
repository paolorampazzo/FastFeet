import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../assets/fastfeet-logo@2x.png';

import { signInRequest } from '../../store/modules/auth/actions';

import {
  Content,
  Forms,
  Img,
  InputContent,
  Text,
  Button,
  Inputs,
} from './styles';

export default function SignIn() {
  const [clearValue, setClearValue] = useState('');
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
    setClearValue('');
  }

  return (
    <>
      <Content>
        <Img src={logo} alt="FastFeet" />
        <Forms onSubmit={handleSubmit}>
          <InputContent>
            <Text>SEU E-MAIL</Text>
            <Inputs name="email" type="email" placeholder="examplo@gmail.com" />
          </InputContent>
          <InputContent>
            <Text>SUA SENHA</Text>
            <Inputs
              name="password"
              type="password"
              placeholder="**********"
              value={clearValue}
              onChange={(e) => setClearValue(e.target.value)}
            />
          </InputContent>

          <Button type="submit">
            {loading ? 'Carregando...' : 'Entrar no sistema'}
          </Button>
        </Forms>
      </Content>
    </>
  );
}
