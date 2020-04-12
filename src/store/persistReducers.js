import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'fastfeet',
      storage,
      whitelist: ['auth', 'user'], // nomes dos reducers que deixo persistir
    },
    reducers
  );

  return persistedReducer;
};
