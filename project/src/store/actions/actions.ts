import {createAction} from '@reduxjs/toolkit';
import { SortMenu } from '../../types/constants';
import { City, Offer } from '../../types/types';

export const changeCity = createAction('city/changeCity', (city: City) => ({
  payload: city,
}));
export const fillOffers = createAction('city/fillOffers', (offers: Offer[]) => ({
  payload: offers,
}));

export const sortOffersPriceLowHigh = createAction('city/sortOffersPriceLowHigh', (offers: Offer[]) => ({
  type: SortMenu.PriceLowHigh,
  payload: offers.slice().sort((a, b) => {
    if(a.price.cost > b.price.cost)
    {
      return 1;
    }
    if(a.price.cost < b.price.cost)
    {
      return -1;
    }
    return 0;})
}));

export const sortOffersPriceHighLow = createAction('city/sortOffersPriceHighLow', (offers: Offer[]) => ({
  type: SortMenu.PriceHighLow,
  payload: offers.slice().sort((a, b) => {
    if(a.price.cost > b.price.cost)
    {
      return -1;
    }
    if(a.price.cost < b.price.cost)
    {
      return 1;
    }
    return 0;})
}));

export const sortOffersTopRateFirst = createAction('city/sortOffersTopRateFirst', (offers: Offer[]) => ({
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
