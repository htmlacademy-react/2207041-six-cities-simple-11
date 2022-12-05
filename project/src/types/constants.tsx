export enum AppSettings {
  CardsCount = 5,
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
  PropertyNotLoggedPage = '/property-not-logged-page'
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
    HotelId = '/hotels/{hotelId}',
    NearHotels = '/hotels/{hotelId}/nearby',
    Comments = '/comments/{hotelId}',
    Login = '/login',
    Logout = '/logout'
  }

export enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN',
  }
