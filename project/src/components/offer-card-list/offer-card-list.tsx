import { TopOffer } from '../../types/types';
import OfferCard from '../offer-card/offer-card';

function OfferCardList(topOffer: TopOffer): JSX.Element {
  const cardsCount = topOffer.cardsCount;
  const offers = topOffer.offers;
  return(
    <div className="cities__places-list places__list tabs__content">
      {offers.slice(0, cardsCount).map((offer) => (
        <OfferCard
          key={offer.id}
          id={offer.id}
          cardImage={offer.cardImage}
          price={offer.price}
          rating={offer.rating}
          description={offer.description}
          type={offer.type}
        />
      ))}
    </div>
  );
}

export default OfferCardList;
