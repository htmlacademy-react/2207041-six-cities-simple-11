import { useParams } from 'react-router-dom';
import { REVIEWS } from '../../mocks/reviews';
import ReviewForm from '../review-form/review-form';
import ReviewItem from '../review-item/review-item';

function ReviewPlace():JSX.Element {
  const params = useParams();
  const offerId: string = params.id ?? '';
  const offerReviews = REVIEWS.filter((item) => item.offerId.toString() === offerId);
  return(
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{offerReviews.length}</span></h2>
      <ul className="reviews__list">
        {offerReviews &&
          offerReviews.map((item) => (
            <ReviewItem
              key={item.id}
              item={item}
            />
          ))}
      </ul>
      <ReviewForm />
    </section>
  );
}

export default ReviewPlace;
