import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import logo from '../../assets/fastfeet-logo.png';

import { signOut } from '../../store/modules/auth/actions';

import { Container, Content, Title, Admin, Button, Titles } from './styles';

export default function Header({
  encomendas,
  entregadores,
  destinatarios,
  problemas,
}) {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/">
            <img src={logo} alt="FastFeet" />
          </Link>
          <Titles>
            <Link to="/">
              <Title current={encomendas}>ENCOMENDAS</Title>
            </Link>
            <Link to="/couriers">
              <Title current={entregadores}>ENTREGADORES</Title>
            </Link>
            <Link to="/recipients">
              <Title current={destinatarios}>DESTINATÁRIOS</Title>
            </Link>
            <Link to="/problems">
              <Title current={problemas}>PROBLEMAS</Title>
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
