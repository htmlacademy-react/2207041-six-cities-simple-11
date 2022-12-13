import { useAppSelector } from '../../hooks/use-app';
import { AuthorizationStatus } from '../../types/constants';
import { Reviews } from '../../types/types';
import ReviewForm from '../review-form/review-form';
import ReviewItem from '../review-item/review-item';

function ReviewPlace():JSX.Element {
  const offerReviews = useAppSelector<Reviews>((state) => state.reviews);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  return(
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{offerReviews.length}</span></h2>
      <ul className="reviews__list">
        {offerReviews.map((item) => (
          <ReviewItem
            key={item.id}
            item={item}
          />
        ))}
      </ul>
      {authorizationStatus === AuthorizationStatus.Auth ? <ReviewForm /> : ''}
    </section>
  );
}

export default ReviewPlace;
