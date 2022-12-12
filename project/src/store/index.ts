import {configureStore} from '@reduxjs/toolkit';
import {reducer} from '../store/reducers/reducer';
import {createAPI} from '../services/api';
import { redirect } from '../middlewares/redirect';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const api = createAPI();

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect)
});
