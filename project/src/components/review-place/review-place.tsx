import { useAppSelector } from '../../hooks/useApp';
import { Reviews } from '../../types/types';
import ReviewForm from '../review-form/review-form';
import ReviewItem from '../review-item/review-item';

function ReviewPlace():JSX.Element {
  const offerReviews = useAppSelector<Reviews>((state) => state.reviews);

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
