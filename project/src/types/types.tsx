import { ApartmentType, DayNight, Rating } from './constants';

type CardImage = {
  className: string;
  src: string;
  width: number;
  height: number;
  alt: string;
}

type Price = {
  cost: number;
  additionalInfo: DayNight;
};

export type Offer = {
  id: number;
  cardImage: CardImage;
  price: Price;
  rating: Rating;
  description: string;
  type: ApartmentType;
};

export type TopOffer = {
  cardsCount: number;
  offers: Offer[];
}

type Visitor = {
  avatar: CardImage;
  name: string;
}

export type Review = {
  id: number;
  visitor: Visitor;
  rating: Rating;
  description: string;
  reviewDate: Date;
  offerId: number;
}

export type City = {
  id: number;
  title: string;
};

export type CityLocation = {
  city: City;
  latitude: number;
  longitude: number;
  zoom: number;
};

export type Point = {
  offerId: number;
  title: string;
  latitude: number;
  longitude: number;
};

export type Points = Point[];
export type Cities = City[];
export type CitiesLocation = CityLocation[];
