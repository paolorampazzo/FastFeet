export function loadHandout() {
  return {
    type: '@handout/LOAD',
  };
}

export function showView({ id, show }) {
  return {
    type: '@handout/SHOW_DETAILS',
    payload: { id, show },
  };
}

export function getDataRequest({ id }) {
  return {
    type: '@handout/GET_DATA_REQUEST',
    payload: { id },
  };
}

export function getDataSuccess(data) {
  return {
    type: '@handout/GET_DATA_SUCCESS',
    payload: { data },
  };
}

export function getDataFailure() {
  return {
    type: '@handout/GET_DATA_FAILURE',
  };
}
