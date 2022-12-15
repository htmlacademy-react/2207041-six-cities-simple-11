import { Offers } from '../../types/types';
import OfferCard from '../offer-card/offer-card';

type OfferCardProps = {
  offers: Offers;
  onItemOver(offerId: number): void;
  onItemLeave(): void;
  className: string;
  classOfferPrefix:string;
}

function OfferCardList(offerCardProps: OfferCardProps): JSX.Element {
  const offers = offerCardProps.offers;

  return(
    <div className={offerCardProps.className}>
      {offers.map((offer) => (
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
