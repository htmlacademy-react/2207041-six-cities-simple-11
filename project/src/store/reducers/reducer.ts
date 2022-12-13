import {createReducer} from '@reduxjs/toolkit';
import { AuthorizationStatus, CITIES } from '../../types/constants';
import { City, Offer, Offers, Reviews, UserData } from '../../types/types';
import { changeCity, fillOffers, loadNearOffers, loadOfferProperty, loadOffers, loadReviews, requireAuthorization, setError, setOffersDataLoadingStatus, setUserData, sortOffersPriceHighLow, sortOffersPriceLowHigh, sortOffersTopRateFirst, sortReviews, setStateReview} from '../actions/actions';

export type InitialState = {
  city: City;
  offers: Offers;
  authorizationStatus: AuthorizationStatus;
  offerLoadingStatus: boolean;
  error: string | null;
  userData: UserData | null;
  offer: Offer | null;
  nearOffers: Offers;
  reviews: Reviews;
  stateReview: boolean;
}

const initialState: InitialState = {
  city: CITIES[0],
  offers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  offerLoadingStatus: false,
  error: null,
  userData: null,
  offer: null,
  nearOffers: [],
  reviews: [],
  stateReview: false
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
    .addCase(sortReviews, (state, action) => {
      state.reviews = action.payload;
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
    })
    .addCase(loadOfferProperty, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(loadNearOffers, (state, action) => {
      state.nearOffers = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(setStateReview, (state, action) => {
      state.stateReview = action.payload;
    });
});

export {reducer};
