import {createAction} from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus, SortMenu } from '../../types/constants';
import { City, Offer, Offers, Reviews, UserData } from '../../types/types';

export const changeCity = createAction('city/changeCity', (city: City) => ({
  payload: city,
}));
export const fillOffers = createAction('city/fillOffers', (offers: Offers) => ({
  payload: offers,
}));

export const sortOffersPriceLowHigh = createAction('city/sortOffersPriceLowHigh', (offers: Offers) => ({
  type: SortMenu.PriceLowHigh,
  payload: offers.slice().sort((a, b) => {
    if(a.price > b.price)
    {
      return 1;
    }
    if(a.price < b.price)
    {
      return -1;
    }
    return 0;})
}));

export const sortOffersPriceHighLow = createAction('city/sortOffersPriceHighLow', (offers: Offers) => ({
  type: SortMenu.PriceHighLow,
  payload: offers.slice().sort((a, b) => {
    if(a.price > b.price)
    {
      return -1;
    }
    if(a.price < b.price)
    {
      return 1;
    }
    return 0;})
}));

export const sortOffersTopRateFirst = createAction('city/sortOffersTopRateFirst', (offers: Offers) => ({
  type: SortMenu.TopRateFirst,
  payload: offers.slice().sort((a, b) => {
    if(a.rating > b.rating)
    {
      return 1;
    }
    if(a.rating < b.rating)
    {
      return -1;
    }
    return 0;})
}));

export const loadOffers = createAction<Offers>('data/loadOffers');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction<string | null>('data/setError');

export const setUserData = createAction<UserData>('data/setUserData');

export const loadOfferProperty = createAction('city/loadOfferPropety', (offer: Offer) => ({
  payload: offer,
}));

export const loadNearOffers = createAction('city/loadNearOffers', (offers: Offers) => ({
  payload: offers
}));

export const loadReviews = createAction('data/loadReviews', (reviews: Reviews) => ({
  payload: reviews
}));

export const redirectToRoute = createAction('app/redirectToRoute', (route: AppRoute) => ({payload: route}));

