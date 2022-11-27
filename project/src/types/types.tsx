type CardImage = {
  className: string;
  src: string;
  width: number;
  height: number;
  alt: string;
}

type Host = {
  id: number;
  name: string;
  isPro: boolean;
  avatarUrl: string;
}

export type Offer = {
  city: City;
  previewImage: string;
  images: string[];
  title: string;
  isPremium: boolean;
  rating: number;
  type: string;
  bedrooms: number;
  maxAdults: number;
  price: number;
  goods: string[];
  host: Host;
  description: string;
  location: Location;
  id: number;
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
  rating: number;
  description: string;
  reviewDate: Date;
  offerId: number;
}

export type City = {
  name: string;
  location: Location;
};

export type Location = {
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

export type AuthData = {
  login: string;
  password: string;
};

export type UserData = {
  id: number;
  email: string;
  token: string;
};

export type Points = Point[];
export type Cities = City[];
export type Offers = Offer[];
