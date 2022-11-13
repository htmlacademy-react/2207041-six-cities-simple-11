import { TopOffer } from '../../types/types';
import OfferCard from '../offer-card/offer-card';

type OfferCardProps = {
  topOffer: TopOffer;
  onItemOver(offerId: number): void;
  onItemLeave(): void;
}

function OfferCardList(offerCardProps: OfferCardProps): JSX.Element {
  const cardsCount = offerCardProps.topOffer.cardsCount;
  const offers = offerCardProps.topOffer.offers;

  return(
    <div className="cities__places-list places__list tabs__content">
      {offers.slice(0, cardsCount).map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          onItemOver={() => offerCardProps.onItemOver(offer.id)}
          onItemLeave={() => offerCardProps.onItemLeave()}
        />
      ))}
    </div>
  );
}

export default OfferCardList;
