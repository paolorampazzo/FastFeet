import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import { getDataSuccess, getDataFailure } from './actions';

export function* getData({ payload }) {
  try {
    const { id } = payload;

    const request = `handouts/${id}`;
    const response = yield call(api.get, request);

    const { data } = response;

    const signature = data.signature ? data.signature.url : null;

    const requestProblems = `delivery/problems?all=true`;
    const responseProblems = yield call(api.get, requestProblems);

    const problems = responseProblems.data;

    const problemid = problems.filter((item) => item.delivery_id === id);

    const problem = problemid.length > 0;

    const handout = {
      rua: data.recipient.rua,
      numero: data.recipient.numero,
      complemento: data.recipient.complemento,
      cidade: data.recipient.cidade,
      estado: data.recipient.estado,
      cep: data.recipient.cep,
      retirada: data.start_date,
      entrega: data.end_date,
      assinatura: signature,
      produto: data.product,
      problem,
    };

    yield put(getDataSuccess(handout));
  } catch (err) {
    toast.error('Falha na coleta de dados');
    yield put(getDataFailure());
  }
}

export default all([takeLatest('@handout/GET_DATA_REQUEST', getData)]);
