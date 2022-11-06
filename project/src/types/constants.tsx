export const tabIndex = {
  tabIndex: 0
};

export enum AppRoute {
  Main = '/main',
  LoginPage = '/login',
  Root = '/',
  Properties = '/offer/',
  PropertyPage = ':id',
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
