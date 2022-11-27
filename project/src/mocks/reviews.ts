import { Review } from '../types/types';

export const REVIEWS: Review[] = [
  {
    id:1,
    visitor: {avatar:{className:'reviews__avatar user__avatar', src:'img/avatar-max.jpg', width:54, height:54, alt:'Reviews avatar'}, name:'Max'},
    rating: 4,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    reviewDate: new Date(2022, 0, 1),
    offerId: 1
  },
  {
    id:2,
    visitor: {avatar:{className:'reviews__avatar user__avatar', src:'img/avatar-max.jpg', width:54, height:54, alt:'Reviews avatar'}, name:'Maxx'},
    rating: 1,
    description: '2. A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    reviewDate: new Date(2022, 1, 1),
    offerId: 2
  },
  {
    id:3,
    visitor: {avatar:{className:'reviews__avatar user__avatar', src:'img/avatar-max.jpg', width:54, height:54, alt:'Reviews avatar'}, name:'Maxxx'},
    rating: 2,
    description: '3. A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    reviewDate: new Date(2022, 2, 1),
    offerId: 3
  },
  {
    id:4,
    visitor: {avatar:{className:'reviews__avatar user__avatar', src:'img/avatar-max.jpg', width:54, height:54, alt:'Reviews avatar'}, name:'Maxxxx'},
    rating: 3,
    description: '4. A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    reviewDate: new Date(2022, 3, 1),
    offerId: 4
  },
  {
    id:5,
    visitor: {avatar:{className:'reviews__avatar user__avatar', src:'img/avatar-max.jpg', width:54, height:54, alt:'Reviews avatar'}, name:'Maxxxxx'},
    rating: 5,
    description: '5. A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    reviewDate: new Date(2022, 4, 1),
    offerId: 4
  }
];
