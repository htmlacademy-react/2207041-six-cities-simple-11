import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {APIRoute} from '../../types/constants';
import {Offers} from '../../types/types';
import { AppDispatch, RootState } from '..';
import { loadOffers, setOffersDataLoadingStatus } from '../actions/actions';

export const fetchOfferAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<Offers>(APIRoute.Hotels);
    dispatch(loadOffers(data));
    dispatch(setOffersDataLoadingStatus(false));
  },
);
