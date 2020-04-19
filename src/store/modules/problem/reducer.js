import produce from 'immer';

const INITIAL_STATE = {
  refresh: false,
  show: false,
  description: '',
};

export default function load(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@problem/SHOW_DETAILS':
      return produce(state, (draft) => {
        draft.show = action.payload.show;
        draft.description = action.payload.description
          ? action.payload.description
          : '';
      });
    default:
      return state;
  }
}
