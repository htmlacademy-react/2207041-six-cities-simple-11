import { useParams } from 'react-router-dom';
import { reviews } from '../../mocks/reviews';
import ReviewForm from '../review-form/review-form';

function ReviewPlace():JSX.Element {
  const params = useParams();
  const offerId: string = params.id ?? '';
  const offerReviews = reviews.filter((item) => item.offerId.toString() === offerId);
  return(
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{offerReviews.length}</span></h2>
      <ul className="reviews__list">
        {offerReviews &&
          offerReviews.map((item) => (
            <li className="reviews__item" key={item.id}>
              <div className="reviews__user user">
                <div className="reviews__avatar-wrapper user__avatar-wrapper">
                  <img className="reviews__avatar user__avatar" src="img/avatar-max.jpg" width="54" height="54" alt="Reviews avatar"/>
                </div>
                <span className="reviews__user-name">
                  Max
                </span>
              </div>
              <div className="reviews__info">
                <div className="reviews__rating rating">
                  <div className="reviews__stars rating__stars">
                    <span style={{width: item.rating}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                </div>
                <p className="reviews__text">
                  {item.description}
                </p>
                <time className="reviews__time" dateTime={item.reviewDate.toISOString()}>{item.reviewDate.toLocaleDateString()}</time>
              </div>
            </li>
          ))}
      </ul>
      <ReviewForm />
    </section>
  );
}

export default ReviewPlace;
