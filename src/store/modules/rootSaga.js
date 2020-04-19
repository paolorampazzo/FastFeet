import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';
import handout from './handout/sagas';
import courier from './courier/sagas';

export default function* rootSaga() {
  return yield all([auth, user, handout, courier]);
}
