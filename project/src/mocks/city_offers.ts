import { CityOffer } from '../types/types';
import { CITIES } from './coordinates';
import { OFFERS } from './offers';

export const CITY_OFFERS: CityOffer[] = [
  {
    city: CITIES[0].city,
    offers: OFFERS
  },
  {
    city: CITIES[1].city,
    offers: [OFFERS[0]]
  },
  {
    city: CITIES[2].city,
    offers: [OFFERS[1], OFFERS[2]]
  },
  {
    city: CITIES[3].city,
    offers: [OFFERS[3]]
  },
  {
    city: CITIES[4].city,
    offers: [OFFERS[3], OFFERS[4]]
  },
  {
    city: CITIES[5].city,
    offers: [OFFERS[4]]
  }
];

