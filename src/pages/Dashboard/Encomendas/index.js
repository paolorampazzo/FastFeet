import React, { useState, useEffect, useCallback } from 'react';
import rc from 'randomcolor';

import { MdSearch, MdAdd, MdBrightness1 } from 'react-icons/md';
import api from '../../../services/api';

// import { useDispatch } from 'react-redux';

import Header from '../../../components/Header';

import {
  Content,
  Wrapper,
  Title,
  Forms,
  InputsDesign,
  Inputs,
  Icon,
  Add,
  Text,
  Table,
  Actions,
  THeader,
  TTitle,
  TContent,
  TItem,
  ItemContent,
  Status,
  StatusText,
  Avatar,
  Filtros,
  Filtro,
  ImgAvatar,
} from './styles';

export default function DashboardEncomendas() {
  const [clicked, setClicked] = useState(false);
  const [positionx, setPositionx] = useState();
  const [positiony, setPositiony] = useState();
  const [handouts, setHandouts] = useState([]);
  const [entregue, setEntregue] = useState(true);
  const [cancelada, setCancelada] = useState(true);
  const [retirada, setRetirada] = useState(true);
  const [pendente, setPendente] = useState(true);

  useEffect(() => {
    async function loadHandouts() {
      const response = await api.get('handouts/?all=true');

      const { data } = response;

      setHandouts(data);
    }
    loadHandouts();
  }, [entregue, retirada, cancelada, pendente]);

  function getStatus(item) {
    const { start_date, end_date, canceled_at } = item;

    if (canceled_at) {
      return ['CANCELADA', '#FAB0B0', '#DE3B3B'];
    }

    if (!start_date) {
      return ['PENDENTE', '#F0F0DF', '#C1BC35'];
    }

    if (start_date && !end_date) {
      return ['RETIRADA', '#BAD2FF', '#4D85EE'];
    }

    return ['ENTREGUE', '#dff0df', '#2ca42b'];
  }

  const headersAndWidths = [
    'ID 88px',
    'Destinatário 260px',
    'Entregador 260px',
    'Cidade 220px',
    'Estado 180px',
    'Status 176px',
    'Ações',
  ];

  const spaces = headersAndWidths.map((item) => item.split(' ')[1]);

  function formatted(name, max) {
    const { length } = name;
    return length > max ? `${name.substring(0, max)}...` : name;
  }

  function handleAction(e) {
    const x = e.clientX;
    const y = e.clientY;

    setPositionx(x);
    setPositiony(y);
    setClicked(!clicked);
  }

  function handleFilter(status) {
    if (status === 'CANCELADA') return setCancelada(!cancelada);
    if (status === 'ENTREGUE') return setEntregue(!entregue);
    if (status === 'PENDENTE') return setPendente(!pendente);
    if (status === 'RETIRADA') return setRetirada(!retirada);
    return 0;
  }
  return (
    <>
      <Wrapper>
        <Header />
        <main>
          <Content>
            <Title>Gerenciando encomendas</Title>

            <Forms onSubmit={() => alert()}>
              <InputsDesign>
                <Icon>
                  <MdSearch size={20} color="#999999" />
                </Icon>
                <Inputs
                  name="search"
                  type="text"
                  placeholder="Buscar por encomendas"
                />
              </InputsDesign>

              <Filtros>
                <Filtro
                  onClick={() => handleFilter('ENTREGUE')}
                  active={entregue}
                  type="button"
                >
                  <Status background="#dff0df" color="#2ca42b">
                    <MdBrightness1 size={12} />
                    <StatusText>ENTREGUE</StatusText>
                  </Status>
                </Filtro>
                <Filtro
                  onClick={() => handleFilter('CANCELADA')}
                  active={cancelada}
                  type="button"
                >
                  <Status
                    background="#FAB0B0"
                    color="#DE3B3B"
                    status="CANCELADA"
                  >
                    <MdBrightness1 size={12} />
                    <StatusText>CANCELADA</StatusText>
                  </Status>
                </Filtro>
                <Filtro
                  onClick={() => handleFilter('RETIRADA')}
                  active={retirada}
                  type="button"
                >
                  <Status background="#BAD2FF" color="#4D85EE">
                    <MdBrightness1 size={12} />
                    <StatusText>RETIRADA</StatusText>
                  </Status>
                </Filtro>
                <Filtro
                  onClick={() => handleFilter('PENDENTE')}
                  active={pendente}
                  type="button"
                >
                  <Status background="#F0F0DF" color="#C1BC35">
                    <MdBrightness1 size={12} />
                    <StatusText>PENDENTE</StatusText>
                  </Status>
                </Filtro>
              </Filtros>
              <Add type="submit">
                <MdAdd size={20} color="#FFFFFF" />
                <Text>CADASTRAR</Text>
              </Add>
            </Forms>
            <Table>
              <THeader>
                {headersAndWidths.map((item) => {
                  const [title, space] = item.split(' ');

                  return space ? (
                    <TTitle key={title} width={space}>
                      {title}
                    </TTitle>
                  ) : (
                    <TTitle key={title}>{title}</TTitle>
                  );
                })}
              </THeader>
              <TContent>
                <ul>
                  {handouts.map((item) => {
                    const [status, background, color] = getStatus(item);
                    const initials = item.courier.name
                      .split(' ')
                      .map((word) => word[0]);

                    const seed = initials.reduce(
                      (total, value) => total * value.charCodeAt(),
                      1
                    );

                    const colorAvatar = rc({ luminosity: 'dark', seed });

                    return (
                      <TItem key={item.id}>
                        <ItemContent
                          width={spaces[0]}
                        >{`#${item.id}`}</ItemContent>
                        <ItemContent width={spaces[1]}>
                          {formatted(item.recipient.name, 25)}
                        </ItemContent>
                        <ItemContent width={spaces[2]}>
                          {item.courier.avatar ? (
                            <ImgAvatar>
                              <img
                                src={item.courier.avatar.url}
                                alt={item.courier.name}
                              />
                            </ImgAvatar>
                          ) : (
                            <Avatar color={colorAvatar}>
                              {initials
                                .reduce((total, value) => total + value, '')
                                .substring(0, 2)}
                            </Avatar>
                          )}
                          {formatted(item.courier.name, 25)}
                        </ItemContent>
                        <ItemContent width={spaces[3]}>
                          {formatted(item.recipient.cidade, 20)}
                        </ItemContent>
                        <ItemContent width={spaces[4]}>
                          {formatted(item.recipient.estado, 20)}
                        </ItemContent>
                        <ItemContent width={spaces[5]}>
                          <Status
                            background={background}
                            color={color}
                            status={status}
                          >
                            <MdBrightness1 size={12} />
                            <StatusText>{status}</StatusText>
                          </Status>
                        </ItemContent>
                        <Actions
                          onClick={handleAction}
                          width={spaces[6]}
                          margin="15px"
                        >
                          ...
                        </Actions>
                      </TItem>
                    );
                  })}
                </ul>
              </TContent>
            </Table>
          </Content>
        </main>
      </Wrapper>
    </>
  );
}
