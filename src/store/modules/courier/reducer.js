import produce from 'immer';

const INITIAL_STATE = {
  refresh: false,
  contains: false,
  id: null,
  avatar_url: null,
  avatar_settings: {},
};

export default function load(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@courier/LOAD':
      return produce(state, (draft) => {
        draft.refresh = !draft.refresh;
      });
    case '@courier/SEND_AVATAR_ID':
      return produce(state, (draft) => {
        draft.id = action.payload.id;
        draft.contains = !!action.payload.id;
      });
    case '@courier/SEND_AVATAR_URL':
      return produce(state, (draft) => {
        draft.avatar_url = action.payload.url;
      });

    default:
      return state;
  }
}
