import produce from 'immer';

const INITIAL_STATE = {
  refresh: false,
};

export default function problem(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@problem/LOAD':
      return produce(state, (draft) => {
        draft.refresh = !draft.refresh;
      });
    default:
      return state;
  }
}
