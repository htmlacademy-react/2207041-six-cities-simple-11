import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { ApartmentType, DayNight, Offer, Rating } from './components/offer-card/offer-card';

enum AppSettings {
  CardsCount = 5
}

const offers: Offer[] = [
  {
    id:1,
    cardImage:{src:'img/apartment-01.jpg', width:260, height:200, alt:'Place imаge'},
    price:{cost:120, additionalInfo:DayNight.Night},
    rating:Rating.Four,
    description:'Beautiful &amp; luxurious apartment at great location',
    type:ApartmentType.Apartment
  },
  {
    id:2,
    cardImage:{src:'img/room.jpg', width:260, height:200, alt:'Place imаge'},
    price:{cost:80, additionalInfo:DayNight.Night},
    rating:Rating.Four,
    description:'Wood and stone place',
    type:ApartmentType.PrivateRoom
  },
  {
    id:3,
    cardImage:{src:'img/apartment-02.jpg', width:260, height:200, alt:'Place imаge'},
    price:{cost:132, additionalInfo:DayNight.Night},
    rating:Rating.Four,
    description:'Canal View Prinsengracht',
    type:ApartmentType.Apartment
  },
  {
    id:4,
    cardImage:{src:'img/apartment-03.jpg', width:260, height:200, alt:'Place imаge'},
    price:{cost:180, additionalInfo:DayNight.Night},
    rating:Rating.Five,
    description:'Nice, cozy, warm big bed apartment',
    type:ApartmentType.Apartment
  },
  {
    id:5,
    cardImage:{src:'img/room.jpg', width:260, height:200, alt:'Place imаge'},
    price:{cost:80, additionalInfo:DayNight.Night},
    rating:Rating.Four,
    description:'Wood and stone place',
    type:ApartmentType.PrivateRoom
  }
];

const elRoot = document.getElementById('root');

if(elRoot) {
  const root = ReactDOM.createRoot(elRoot);

  root.render(
    <React.StrictMode>
      <App
        cardsCount = {AppSettings.CardsCount}
        offers={offers}
      />
    </React.StrictMode>,
  );
}
