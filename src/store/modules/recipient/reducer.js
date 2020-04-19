import produce from 'immer';

const INITIAL_STATE = {
  refresh: false,
};

export default function recipient(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@recipient/LOAD':
      return produce(state, (draft) => {
        draft.refresh = !draft.refresh;
      });
    default:
      return state;
  }
}
