import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import logo from '../../assets/fastfeet-logo.png';

import { signOut } from '../../store/modules/auth/actions';

import { Container, Content, Title, Admin, Button, Titles } from './styles';

export default function Header() {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="FastFeet" />
          <Titles>
            <Link to="/">
              <Title current>ENCOMENDAS</Title>
            </Link>
            <Link to="/">
              <Title>ENTREGADORES</Title>
            </Link>
            <Link to="/">
              <Title>DESTINATARIOS</Title>
            </Link>
            <Link to="/">
              <Title>PROBLEMAS</Title>
            </Link>
          </Titles>
        </nav>

        <aside>
          <Admin>Admin FastFeet</Admin>
          <Button onClick={handleSignOut}>sair do sistema</Button>
        </aside>
      </Content>
    </Container>
  );
}
