import {createReducer} from '@reduxjs/toolkit';
import { CITIES } from '../../mocks/coordinates';
import { AuthorizationStatus } from '../../types/constants';
import { City, Offers, UserData } from '../../types/types';
import {changeCity, fillOffers, loadOffers, requireAuthorization, setError, setOffersDataLoadingStatus, setUserData, sortOffersPriceHighLow, sortOffersPriceLowHigh, sortOffersTopRateFirst} from '../actions/actions';

export type InitialState = {
  city: City;
  offers: Offers;
  authorizationStatus: AuthorizationStatus;
  offerLoadingStatus: boolean;
  error: string | null;
  userData: UserData | null;
}

const initialState: InitialState = {
  city: CITIES[0],
  offers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  offerLoadingStatus: false,
  error: null,
  userData: null
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    });
  builder
    .addCase(fillOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(sortOffersPriceLowHigh, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(sortOffersPriceHighLow, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(sortOffersTopRateFirst, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.offerLoadingStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setUserData, (state, action) => {
      state.userData = action.payload;
    });
});

export {reducer};
