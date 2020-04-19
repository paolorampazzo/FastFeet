import React from 'react';
import { MdEdit, MdDeleteForever } from 'react-icons/md';
import { GoEye } from 'react-icons/go';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import api from '../../services/api';

import history from '../../services/history';
import timeToast from '../../config/timeToast';

import { showView, loadHandout } from '../../store/modules/handout/actions';
import { showProblem } from '../../store/modules/problem/actions';
import { loadRecipient } from '../../store/modules/recipient/actions';
import {
  loadCourier,
  sendAvatarSettings,
} from '../../store/modules/courier/actions';

import { Container, MenuList, ItemMenu, ItemText } from './styles';

async function handleDelete(id, dispatch, what) {
  const answer = window.confirm(
    'Tem certeza que deseja excluir permanentemente este item ?'
  );

  if (answer === true) {
    try {
      const request = `${what}/${id}`;
      const response = await api.delete(request);

      if (response.status === 200) {
        if (what === 'handouts') {
          dispatch(loadHandout());
        }
        if (what === 'couriers') {
          dispatch(loadCourier());
        }
        if (what === 'problems') {
          setTimeout(() => history.push('/'), timeToast);
        }
        if (what === 'recipients') {
          dispatch(loadRecipient());
        }

        what === 'problems'
          ? toast.warn('Entrega cancelada!')
          : toast.warn('Entrada deletada!');
      } else {
        toast.error('Falha ao deletar!');
      }
    } catch (err) {
      what === 'problems'
        ? toast.error('A entrega ja se encontra cancelada!')
        : toast.error('Falha ao deletar! Existem entregas relacionadas.');
    }
  }
}

function handleEdit(id, what) {}

function handleView(id, what, dispatch, description) {
  if (what === 'handouts') dispatch(showView({ id, show: true }));
  if (what === 'problems') dispatch(showProblem({ description, show: true }));
}

export default function ToggleMenu({
  id,
  handouts,
  couriers,
  destinatarios,
  problemas,
  description,
}) {
  const dispatch = useDispatch();

  const what = handouts
    ? 'handouts'
    : couriers
    ? 'couriers'
    : problemas
    ? 'problems'
    : 'recipients';

  return (
    <Container>
      <MenuList problemas={problemas}>
        {(handouts || problemas) && (
          <ItemMenu>
            <GoEye color="#8E5BE8" />
            <ItemText
              onClick={() => {
                handleView(id, what, dispatch, description);
              }}
            >
              Visualizar
            </ItemText>
          </ItemMenu>
        )}
        {!problemas && (
          <ItemMenu>
            <Link to={`${what}/${id}`}>
              <MdEdit color="#4D85EE" />
              <ItemText onClick={() => handleEdit(id, what, dispatch)}>
                Editar
              </ItemText>
            </Link>
          </ItemMenu>
        )}
        <ItemMenu>
          <MdDeleteForever color="#DE3B3B" />
          <ItemText
            onClick={() => {
              handleDelete(id, dispatch, what);
            }}
          >
            {!problemas ? 'Excluir' : 'Cancelar encomenda'}
          </ItemText>
        </ItemMenu>
      </MenuList>
    </Container>
  );
}
