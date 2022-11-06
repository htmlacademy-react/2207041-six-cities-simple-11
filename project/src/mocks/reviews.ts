import { Rating } from '../types/constants';
import { Review } from '../types/types';

export const reviews: Review[] = [
  {
    id:1,
    visitor: {avatar:{className:'reviews__avatar user__avatar', src:'img/avatar-max.jpg', width:54, height:54, alt:'Reviews avatar'}, name:'Max'},
    rating: Rating.Four,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    reviewDate: new Date(2022, 1, 1),
    offerId: 1
  },
  {
    id:2,
    visitor: {avatar:{className:'reviews__avatar user__avatar', src:'img/avatar-max.jpg', width:54, height:54, alt:'Reviews avatar'}, name:'Maxx'},
    rating: Rating.One,
    description: '2. A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    reviewDate: new Date(2022, 2, 2),
    offerId: 2
  },
  {
    id:3,
    visitor: {avatar:{className:'reviews__avatar user__avatar', src:'img/avatar-max.jpg', width:54, height:54, alt:'Reviews avatar'}, name:'Maxxx'},
    rating: Rating.Two,
    description: '3. A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    reviewDate: new Date(2022, 3, 3),
    offerId: 3
  },
  {
    id:4,
    visitor: {avatar:{className:'reviews__avatar user__avatar', src:'img/avatar-max.jpg', width:54, height:54, alt:'Reviews avatar'}, name:'Maxxxx'},
    rating: Rating.Three,
    description: '4. A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    reviewDate: new Date(2022, 4, 4),
    offerId: 4
  },
  {
    id:5,
    visitor: {avatar:{className:'reviews__avatar user__avatar', src:'img/avatar-max.jpg', width:54, height:54, alt:'Reviews avatar'}, name:'Maxxxxx'},
    rating: Rating.Five,
    description: '5. A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    reviewDate: new Date(2022, 5, 5),
    offerId: 4
  }
];
