import { Link } from 'react-router-dom';
import { AppRoute, AppSettings, ONE_STAR } from '../../types/constants';
import { Offer } from '../../types/types';
import { setUpperFirstLetter } from '../../utils/utils';
import PlaceCardMark from '../place-card-mark/place-card-mark';

type OfferCardProps = {
  offer: Offer;
  onItemOver: (offerId: number) => void;
  onItemLeave: () => void;
  classPrefix: string;
}

function OfferCard(offerCardProps: OfferCardProps): JSX.Element {
  const offer = offerCardProps.offer;

  return(
    <article className={`${offerCardProps.classPrefix}__card place-card`}
      onMouseOver={() => offerCardProps.onItemOver(offer.id)}
      onMouseLeave={offerCardProps.onItemLeave}
    >
      <PlaceCardMark className='place-card__mark' offer={offer} />
      <div className={`${offerCardProps.classPrefix}__image-wrapper place-card__image-wrapper`}>
        <Link to={`${AppRoute.Properties}${offer.id}`}>
          <img className="place-card__image"
            src={offer.previewImage}
            width={AppSettings.CardImageWidth}
            height={AppSettings.CardImageHeight} alt='Place imаge'
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${Math.round(offer.rating) * ONE_STAR}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Properties}${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{setUpperFirstLetter(offer.type)}</p>
      </div>
    </article>
  );
}

export default OfferCard;
