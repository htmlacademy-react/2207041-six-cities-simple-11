import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {APIRoute, AuthorizationStatus, ResponseFlag} from '../../types/constants';
import {AuthData, Offer, Offers, Review, Reviews, UserData} from '../../types/types';
import { AppDispatch, RootState } from '..';
import { loadNearOffers, loadOfferProperty, loadOffers, loadReviews, requireAuthorization, setError, setOfferDataLoadingStatus, setOffersDataLoadingStatus, setServerError, setStateReview, setUserData, sortReviews } from '../actions/actions';
import { dropToken, saveToken } from '../../services/token';

export const fetchOfferAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    try{
      const {data} = await api.get<Offers>(APIRoute.Hotels);
      dispatch(loadOffers(data));
      dispatch(setOffersDataLoadingStatus(false));
      dispatch(setServerError(false));
    }catch(error){
      dispatch(setOffersDataLoadingStatus(false));
      dispatch(setServerError(true));
    }
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<UserData>(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(setUserData(data));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(setUserData(data));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);

export const fetchOfferPropertyAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'data/fetchOfferProperty',
  async (id, {dispatch, extra: api}) => {
    try{
      dispatch(setOfferDataLoadingStatus(true));
      const {data} = await api.get<Offer>(`${APIRoute.HotelId}${id}`);
      dispatch(loadOfferProperty(data));
      dispatch(setOfferDataLoadingStatus(false));
    }
    catch(error){
      dispatch(setOfferDataLoadingStatus(false));
    }
  }
);

export const fetchNearOffers = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'data/fetchNearOffers',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Offers>(`${APIRoute.HotelId}${id}/nearby`);
    dispatch(loadNearOffers(data));
  },
);

export const fetchReviews = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'data/fetchReviews',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Reviews>(`${APIRoute.Comments}${id}`);
    dispatch(loadReviews(data));
    dispatch(sortReviews(data));
  },
);

export const addReview = createAsyncThunk<void, Review, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'data/addReview',
  async ({id, comment, rating}, {dispatch, extra: api}) => {
    try{
      dispatch(setStateReview(true));
      await api.post(`${APIRoute.Comments}${id}`, {comment, rating});
      dispatch(fetchReviews(id.toString()));
      dispatch(setError(ResponseFlag.Success));
    }
    catch(error){
      if (typeof error === 'string') {
        dispatch(setError(error));
      } else if (error instanceof Error) {
        dispatch(setError(error.message));
      }
    }finally{
      dispatch(setStateReview(false));
    }
  }
);
