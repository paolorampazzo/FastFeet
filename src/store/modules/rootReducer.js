import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import handout from './handout/reducer';
import courier from './courier/reducer';
import recipient from './recipient/reducer';
import problem from './problem/reducer';

export default combineReducers({
  auth,
  user,
  handout,
  courier,

  recipient,
  problem,
});
