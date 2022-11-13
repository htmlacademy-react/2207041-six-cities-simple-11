import { TopOffer } from '../../types/types';
import OfferCard from '../offer-card/offer-card';

type OfferCardProps = {
  topOffer: TopOffer;
  onItemOver(offerId: number): void;
  onItemLeave(): void;
  className: string;
  classOfferPrefix:string;
}

function OfferCardList(offerCardProps: OfferCardProps): JSX.Element {
  const cardsCount = offerCardProps.topOffer.cardsCount;
  const offers = offerCardProps.topOffer.offers;

  return(
    <div className={offerCardProps.className}>
      {offers.slice(0, cardsCount).map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          onItemOver={() => offerCardProps.onItemOver(offer.id)}
          onItemLeave={() => offerCardProps.onItemLeave()}
          classPrefix={offerCardProps.classOfferPrefix}
        />
      ))}
    </div>
  );
}

export default OfferCardList;
