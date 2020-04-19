import React, { useState, useEffect, useMemo, useCallback } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

import { MdFirstPage, MdLastPage } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import api from '../../../services/api';

import ToggleMenu from '../../../components/ToggleMenu';

import Header from '../../../components/Header';

import {
  Content,
  Wrapper,
  Title,
  Table,
  Actions,
  THeader,
  TTitle,
  TContent,
  TItem,
  ItemContent,
  Pages,
  PageButton,
} from '../styles';

export default function DashboardEncomendas() {
  const { id } = useParams();

  const [handouts, setHandouts] = useState([]);
  const [appear, setAppear] = useState('');
  const [page, setPage] = useState(1);

  const refresh = useSelector((state) => state.problem.refresh);

  useEffect(() => {
    async function loadHandouts() {
      const request = id
        ? `delivery/${id}/problems?page=${page}`
        : `delivery/problems/?page=${page}`;

      const response = await api.get(request);

      const { data } = response;

      setHandouts(data);
    }
    loadHandouts();
  }, [page, refresh]);

  const headersAndWidths = useMemo(
    () => ['Encomenda 188px', 'Problema 996px', 'Ações 50px'],
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

  function beforePage() {
    if (page !== 1) setPage(page - 1);
  }

  function nextPage() {
    setPage(page + 1);
  }

  return (
    <Wrapper>
      <Header problemas />

      <Content>
        <Title>Problemas na entrega</Title>
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
                      {formatted(item.description, 120)}
                    </ItemContent>

                    <ItemContent
                      overflow
                      width={spaces[2]}
                      maxwidth={`${
                        (85 * spacesNumbers[2]) /
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
                            <ToggleMenu id={item.delivery_id} problemas />
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
