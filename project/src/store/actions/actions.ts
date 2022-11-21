import {createAction} from '@reduxjs/toolkit';
import { City, Offer } from '../../types/types';

export const changeCity = createAction('city/changeCity', (city: City) => ({
  payload: city,
}));
export const fillOffers = createAction('city/fillOffers', (offers: Offer[]) => ({
  payload: offers,
}));
