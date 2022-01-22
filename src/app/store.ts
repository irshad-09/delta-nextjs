import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const preloadedState = {};

export function makeStore() {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => [
      ...getDefaultMiddleware({ thunk: false }),
      sagaMiddleware,
    ],
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState,
  });
}

const store = makeStore();
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore TODO: resolve
store.sagaTask = sagaMiddleware.run(rootSaga);

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;
