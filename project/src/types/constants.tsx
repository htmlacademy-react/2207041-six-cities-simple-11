import { Cities } from './types';

export enum AppSettings {
  CardImageWidth = 260,
  CardImageHeight = 200
}

export const tabIndex = {
  tabIndex: 0
};

export enum AppRoute {
  Main = '/main',
  LoginPage = '/login',
  Root = '/',
  Properties = '/offer/',
  PropertyPage = ':id',
  Locations = '/location/',
  LocationsPage = ':id',
  MainEmptyPage = '/main-empty-page',
  NotFoundPage = '/not-found-page'
}

export const URL_MARKER_DEFAULT =
  '../img/pin.svg';

export const URL_MARKER_CURRENT =
  '../img/pin-active.svg';

export enum SortMenu {
    Popular = 'Popular',
    PriceLowHigh = 'Price: low to high',
    PriceHighLow = 'Price: high to low',
    TopRateFirst = 'Top rated first',
    Default = 'Popular'
  }

export enum APIRoute {
    Hotels = '/hotels',
    HotelId = '/hotels/',
    Comments = '/comments/',
    Login = '/login',
    Logout = '/logout'
  }

export enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN',
  }

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

export const ONE_STAR = 20;

