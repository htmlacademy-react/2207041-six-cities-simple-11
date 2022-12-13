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

export type Visitor = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
}

export type Review = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: Visitor;
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
  id: number;
  title: string;
  latitude: number;
  longitude: number;
};

export type AuthData = {
  login: string;
  password: string;
};

export type UserData = {
  avatarUrl: string;
  email: string;
  id: number;
  isPro: boolean;
  name: string;
  token: string;
};

export type Points = Point[];
export type Cities = City[];
export type Offers = Offer[];
export type Reviews = Review[];
