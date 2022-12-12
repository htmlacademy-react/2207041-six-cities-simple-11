import { Review } from '../../types/types';

type ReviewProps = {
  item: Review;
}

function ReviewItem({item}: ReviewProps):JSX.Element {
  return(
    <li className="reviews__item" key={item.id}>
      <div className="reviews__user user">
        <div className={`reviews__avatar-wrapper${item.user.isPro ? '--pro' : ''} user__avatar-wrapper`}>
          <img className="reviews__avatar user__avatar" src={item.user.avatarUrl} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {item.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${Math.round(item.rating) * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {item.comment}
        </p>
        <time className="reviews__time" dateTime={item.date}>{new Date(item.date).toLocaleString('en-US', { month: 'long', year: 'numeric' })}</time>
      </div>
    </li>
  );
}

export default ReviewItem;
