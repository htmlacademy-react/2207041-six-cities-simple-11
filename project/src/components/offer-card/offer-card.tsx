export enum Rating {
  One = '20%',
  Two = '40%',
  Three = '60%',
  Four = '80%',
  Five = '100%'
}

export enum DayNight {
  Day = '',
  Night = 'night'
}

export enum ApartmentType {
  Apartment = 'Apartment',
  PrivateRoom = 'Private room'
}

type CardImade = {
  src: string;
  width: number;
  height: number;
  alt: string;
}

type Price = {
  cost: number;
  additionalInfo: DayNight;
};

export type Offer = {
  id?: number;
  cardImage: CardImade;
  price: Price;
  rating: Rating;
  description: string;
  type: ApartmentType;
};

function OfferCard(offer: Offer): JSX.Element {
  return(
    <article className="cities__card place-card">
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="/#">
          <img className="place-card__image" src={offer.cardImage.src} width={offer.cardImage.width} height={offer.cardImage.height} alt={offer.cardImage.alt}></img>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price.cost}</b>
            <span className="place-card__price-text">&#47;&nbsp;{offer.price.additionalInfo}</span>
          </div>

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: offer.rating}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="/#">{offer.description}</a>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default OfferCard;
