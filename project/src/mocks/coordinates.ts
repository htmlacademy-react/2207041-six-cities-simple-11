import { Cities, Points } from '../types/types';

export const CITIES: Cities = [
  {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    }
  },
  {
    name: 'Cologne',
    location: {
      latitude: 50.938361,
      longitude: 6.959974, zoom: 13
    }
  },
  {
    name: 'Brussels',
    location: {
      latitude: 50.846557,
      longitude:4.351697,
      zoom: 13
    }
  },
  {
    name: 'Amsterdam',
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13
    }
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13
    }
  },
  {
    name: 'Dusseldorf',
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13
    }
  }
];

export const NEAR_POINTS: Points = [
  {
    offerId: 2,
    title: 'Point 2',
    latitude: 52.3909553943508,
    longitude: 4.85309666406198
  },
  {
    offerId: 3,
    title: 'Point 3',
    latitude: 52.3609553943508,
    longitude: 4.85309666406198
  },
  {
    offerId: 4,
    title: 'Point 4',
    latitude: 52.3909553943508,
    longitude: 4.929309666406198
  }
];
