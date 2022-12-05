import {createReducer} from '@reduxjs/toolkit';
import { CITIES } from '../../mocks/coordinates';
import { AuthorizationStatus } from '../../types/constants';
import { City, Offers } from '../../types/types';
import {changeCity, fillOffers, loadOffers, setOffersDataLoadingStatus, sortOffersPriceHighLow, sortOffersPriceLowHigh, sortOffersTopRateFirst} from '../actions/actions';

export type InitialState = {
  city: City;
  offers: Offers;
  authorizationStatus: AuthorizationStatus;
  offerLoadingStatus: boolean;
}

const initialState: InitialState = {
  city: CITIES[0],
  offers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  offerLoadingStatus: false
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
    });
});

export {reducer};
