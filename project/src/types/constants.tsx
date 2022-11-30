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
  PropertyNotLoggedPage = '/property-not-logged-page'
}

export enum Rating {
  One = '20%',
  Two = '40%',
  Three = '60%',
  Four = '80%',
  Five = '100%'
}

export enum DayNight {
  Day = '',
  Night = 'night'
}

export enum ApartmentType {
  Apartment = 'Apartment',
  PrivateRoom = 'Private room'
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
