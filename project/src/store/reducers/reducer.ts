import {createReducer} from '@reduxjs/toolkit';
import { CITIES } from '../../mocks/coordinates';
import { OFFERS } from '../../mocks/offers';
import { CityOffer } from '../../types/types';
import {changeCity, fillOffers} from '../actions/actions';

const initialState: CityOffer = {
  city: CITIES[0].city,
  offers: OFFERS
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    });
  builder
    .addCase(fillOffers, (state, action) => {
      state.offers = action.payload;
    });
});

export {reducer};
