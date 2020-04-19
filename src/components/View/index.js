import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OutsideClickHandler from 'react-outside-click-handler';

import { FaFileSignature } from 'react-icons/fa';
import { IoMdAlert } from 'react-icons/io';
import { formatToTimeZone } from 'date-fns-timezone';
import pt from 'date-fns/locale/pt-BR';

import { Link } from 'react-router-dom';

import { format, parseISO } from 'date-fns';

import {
  Container,
  Content,
  Encomenda,
  Datas,
  Assinatura,
  NoSignature,
  Problem,
} from './styles';

import { showView, getDataRequest } from '../../store/modules/handout/actions';

export default function View() {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.handout.show);
  const id = useSelector((state) => state.handout.id);
  const data = useSelector((state) => state.handout.data);

  useEffect(() => {
    dispatch(getDataRequest({ id }));
  }, [show, id]);

  return (
    <Container>
      <OutsideClickHandler
        onOutsideClick={() => {
          dispatch(showView({ show: false }));
        }}
      >
        <Content>
          <Encomenda>
            <h1>Informações da encomenda</h1>
            <section>
              <h2>{`Produto: ${data.produto}`}</h2>
              {data.problem && (
                <Problem>
                  <Link to={`problems/${id}`}>
                    <IoMdAlert color="red" size={20} />
                  </Link>
                </Problem>
              )}
            </section>
            <span>{`${data.rua}, ${data.numero}`}</span>

            {data.complemento && <span>Complemento</span>}
            <span>{`${data.cidade} - ${data.estado}`}</span>
            <span>{data.cep}</span>
          </Encomenda>
          <Datas>
            <h1>Datas</h1>
            <section>
              <h2>Retirada: </h2>
              <span>{`${
                data.retirada
                  ? formatToTimeZone(data.retirada, 'DD/MM/YYYY', {
                      timeZone: 'America/Sao_Paulo',
                      locale: pt,
                    })
                  : 'Ainda nao retirada'
              }`}</span>
            </section>
            <section>
              <h2>Entrega: </h2>
              <span>{`${
                data.entrega
                  ? formatToTimeZone(data.entrega, 'DD/MM/YYYY', {
                      timeZone: 'America/Sao_Paulo',
                      locale: pt,
                    })
                  : 'Ainda nao entregue'
              }`}</span>
            </section>
          </Datas>
          <Assinatura>
            <h1>Assinatura do destinatário</h1>
            <section>
              {(data.assinatura && (
                <img src={data.assinatura} alt="assinatura" />
              )) || (
                <NoSignature>
                  <FaFileSignature size={20} />
                  <h1>Sem Assinatura</h1>
                </NoSignature>
              )}
            </section>
          </Assinatura>
        </Content>
      </OutsideClickHandler>
    </Container>
  );
}
