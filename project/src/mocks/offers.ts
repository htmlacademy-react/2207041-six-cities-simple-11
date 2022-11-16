import { ApartmentType, DayNight, Rating } from '../types/constants';
import { Offer } from '../types/types';


export const OFFERS: Offer[] = [
  {
    id:1,
    cardImage:{ className:'place-card__image', src:'img/apartment-01.jpg', width:260, height:200, alt:'Place imаge'},
    price:{cost:120, additionalInfo:DayNight.Night},
    rating:Rating.Four,
    description:'Beautiful &amp; luxurious apartment at great location',
    type:ApartmentType.Apartment
  },
  {
    id:2,
    cardImage:{className:'place-card__image', src:'img/room.jpg', width:260, height:200, alt:'Place imаge'},
    price:{cost:80, additionalInfo:DayNight.Night},
    rating:Rating.Four,
    description:'Wood and stone place',
    type:ApartmentType.PrivateRoom
  },
  {
    id:3,
    cardImage:{className:'place-card__image', src:'img/apartment-02.jpg', width:260, height:200, alt:'Place imаge'},
    price:{cost:132, additionalInfo:DayNight.Night},
    rating:Rating.Four,
    description:'Canal View Prinsengracht',
    type:ApartmentType.Apartment
  },
  {
    id:4,
    cardImage:{className:'place-card__image', src:'img/apartment-03.jpg', width:260, height:200, alt:'Place imаge'},
    price:{cost:180, additionalInfo:DayNight.Night},
    rating:Rating.Five,
    description:'Nice, cozy, warm big bed apartment',
    type:ApartmentType.Apartment
  },
  {
    id:5,
    cardImage:{className:'place-card__image', src:'img/room.jpg', width:260, height:200, alt:'Place imаge'},
    price:{cost:80, additionalInfo:DayNight.Night},
    rating:Rating.Four,
    description:'Wood and stone place',
    type:ApartmentType.PrivateRoom
  }
];
