import React, { useState, useEffect, useMemo, useCallback } from 'react';
import rc from 'randomcolor';
import { useSelector } from 'react-redux';
import { lighten } from 'polished';
import { Link } from 'react-router-dom';
import OutsideClickHandler from 'react-outside-click-handler';

import {
  MdSearch,
  MdAdd,
  MdBrightness1,
  MdFirstPage,
  MdLastPage,
} from 'react-icons/md';

import { IoMdAlert } from 'react-icons/io';
import View from '../../../components/View';
import api from '../../../services/api';

import ToggleMenu from '../../../components/ToggleMenu';

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
  Pages,
  PageButton,
} from '../styles';

export default function DashboardEncomendas() {
  const refresh = useSelector((state) => state.handout.refresh);
  const showView = useSelector((state) => state.handout.show);

  const [handouts, setHandouts] = useState([]);
  const [entregue, setEntregue] = useState(true);
  const [cancelada, setCancelada] = useState(true);
  const [retirada, setRetirada] = useState(true);
  const [pendente, setPendente] = useState(true);
  const [problemas, setProblemas] = useState(false);
  const [problemIds, setProblemIds] = useState([]);
  const [problemIdsSearch, setProblemIdsSearch] = useState([]);
  const [appear, setAppear] = useState('');
  const [page, setPage] = useState(1);
  const [busca, setBusca] = useState('');

  useEffect(() => {
    async function loadHandouts() {
      const request = busca
        ? `handouts/?page=${page}&produto=${busca}&problemIds=${JSON.stringify(
            problemIdsSearch
          )}`
        : `handouts/?page=${page}&problemIds=${JSON.stringify(
            problemIdsSearch
          )}`;
      const response = await api.get(request);

      const { data } = response;

      setHandouts(data);
    }
    loadHandouts();

    async function loadProblems() {
      const requestProblems = `delivery/problems/?all=true`;

      const responseProblems = await api.get(requestProblems);

      const problemData = responseProblems.data;

      if (problemData.length === 0) setProblemIds([0]);
      else setProblemIds(problemData);
    }

    loadProblems();
  }, [page, busca, problemIdsSearch, setProblemIdsSearch, refresh]);

  useEffect(() => {
    if (showView) {
      setAppear(0);
    }
  }, [showView]);

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

  const headersAndWidths = useMemo(
    () => [
      'ID 88px',
      'Destinatário 260px',
      'Entregador 260px',
      'Cidade 220px',
      'Estado 180px',
      'Status 176px',
      'Ações 50px',
    ],
    []
  );

  const spaces = useMemo(
    () => headersAndWidths.map((item) => item.split(' ')[1]),
    [headersAndWidths]
  );

  const spacesNumbers = useMemo(
    () =>
      spaces.map((item) => parseInt(item.substring(0, item.length - 2), 10)),
    [spaces]
  );

  const formatted = useCallback((name, max) => {
    const { length } = name;
    return length > max ? `${name.substring(0, max)}...` : name;
  });

  function handleAction(id) {
    setAppear(id);
  }

  function handleFilter() {
    setPage(1);

    if (!problemas) {
      setProblemIdsSearch(problemIds.map((item) => item.delivery_id));
    } else {
      setProblemIdsSearch([]);
    }

    setProblemas(!problemas);
  }

  function beforePage() {
    if (page !== 1) setPage(page - 1);
  }

  function nextPage() {
    setPage(page + 1);
  }

  function handleBusca(e) {
    setBusca(e.target.value);
    setPage(1);
  }

  return (
    <Wrapper>
      {showView && <View />}
      <Header encomendas />

      <Content>
        <Title>Gerenciando encomendas</Title>
        <Forms onSubmit={() => {}}>
          <InputsDesign>
            <Icon>
              <MdSearch size={20} color="#999999" />
            </Icon>
            <Inputs
              name="search"
              placeholder="Buscar por encomendas"
              value={busca}
              onChange={(e) => handleBusca(e)}
            />
          </InputsDesign>

          <Filtros>
            {/* <Filtro
              onClick={() => handleFilter('ENTREGUE')}
              active={entregue}
              type="button"
            >
              <Status background="#dff0df" color="#2ca42b">
                <MdBrightness1 size={12} />
                <StatusText>ENTREGUES</StatusText>
              </Status>
            </Filtro>
            <Filtro
              onClick={() => handleFilter('CANCELADA')}
              active={cancelada}
              type="button"
            >
              <Status background="#FAB0B0" color="#DE3B3B" status="CANCELADA">
                <MdBrightness1 size={12} />
                <StatusText>CANCELADAS</StatusText>
              </Status>
            </Filtro>
            <Filtro
              onClick={() => handleFilter('RETIRADA')}
              active={retirada}
              type="button"
            >
              <Status background="#BAD2FF" color="#4D85EE">
                <MdBrightness1 size={12} />
                <StatusText>RETIRADAS</StatusText>
              </Status>
            </Filtro>
            <Filtro
              onClick={() => handleFilter('PENDENTE')}
              active={pendente}
              type="button"
            >
              <Status background="#F0F0DF" color="#C1BC35">
                <MdBrightness1 size={12} />
                <StatusText>PENDENTES</StatusText>
              </Status>
            </Filtro> */}
            <Filtro
              onClick={() => handleFilter()}
              active={problemas}
              type="button"
            >
              <Status background={lighten(0.45, '#DB3500')} color="#DB3500">
                <IoMdAlert size={15} />
                <StatusText>PROBLEMAS</StatusText>
              </Status>
            </Filtro>
          </Filtros>
          <Link to="/dashboard/add">
            <Add type="submit">
              <MdAdd size={20} color="#FFFFFF" />
              <Text>CADASTRAR</Text>
            </Add>
          </Link>
        </Forms>
        <Pages>
          <PageButton type="button" onClick={beforePage}>
            <MdFirstPage color="#7D40E7" size={25} />
          </PageButton>
          <span>Pagina {page}</span>
          <PageButton type="button" onClick={nextPage}>
            <MdLastPage color="#7D40E7" size={25} />
          </PageButton>
        </Pages>
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
                      maxwidth={`${
                        (85 * spacesNumbers[0]) /
                        spacesNumbers.reduce((total, value) => total + value, 0)
                      }vw`}
                    >{`#${item.id}`}</ItemContent>
                    <ItemContent
                      width={spaces[1]}
                      maxwidth={`${
                        (85 * spacesNumbers[1]) /
                        spacesNumbers.reduce((total, value) => total + value, 0)
                      }vw`}
                    >
                      {formatted(item.recipient.name, 25)}
                    </ItemContent>
                    <ItemContent
                      width={spaces[2]}
                      maxwidth={`${
                        (85 * spacesNumbers[2]) /
                        spacesNumbers.reduce((total, value) => total + value, 0)
                      }vw`}
                    >
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
                    <ItemContent
                      width={spaces[3]}
                      maxwidth={`${
                        (85 * spacesNumbers[3]) /
                        spacesNumbers.reduce((total, value) => total + value, 0)
                      }vw`}
                    >
                      {formatted(item.recipient.cidade, 20)}
                    </ItemContent>
                    <ItemContent
                      width={spaces[4]}
                      maxwidth={`${
                        (85 * spacesNumbers[4]) /
                        spacesNumbers.reduce((total, value) => total + value, 0)
                      }vw`}
                    >
                      {formatted(item.recipient.estado, 20)}
                    </ItemContent>
                    <ItemContent
                      width={spaces[5]}
                      maxwidth={`${
                        (85 * spacesNumbers[5]) /
                        spacesNumbers.reduce((total, value) => total + value, 0)
                      }vw`}
                    >
                      <Status
                        background={background}
                        color={color}
                        status={status}
                      >
                        <MdBrightness1 size={12} />
                        <StatusText>{status}</StatusText>
                      </Status>
                    </ItemContent>
                    <ItemContent
                      overflow
                      width={spaces[6]}
                      maxwidth={`${
                        (85 * spacesNumbers[6]) /
                        spacesNumbers.reduce((total, value) => total + value, 0)
                      }vw`}
                    >
                      <Actions onClick={() => handleAction(item.id)} width={0}>
                        ...
                        {appear === item.id && (
                          <OutsideClickHandler
                            onOutsideClick={() => {
                              setAppear(0);
                            }}
                          >
                            <ToggleMenu id={item.id} handouts />
                          </OutsideClickHandler>
                        )}
                      </Actions>
                    </ItemContent>
                  </TItem>
                );
              })}
            </ul>
          </TContent>
        </Table>
      </Content>
    </Wrapper>
  );
}
