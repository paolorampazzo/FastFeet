import produce from 'immer';

const INITIAL_STATE = {
  refresh: false,
  show: false,
  id: null,
  data: {},
};

export default function load(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@handout/LOAD':
      return produce(state, (draft) => {
        draft.refresh = !state.refresh;
      });
    case '@handout/SHOW_DETAILS':
      return produce(state, (draft) => {
        draft.show = action.payload.show;
        draft.id = action.payload.id;
        draft.data = {};
      });
    case '@handout/GET_DATA_SUCCESS':
      return produce(state, (draft) => {
        draft.data = action.payload.data;
      });
    default:
      return state;
  }
}
