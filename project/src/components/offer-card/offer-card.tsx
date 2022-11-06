import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../types/constants';
import { Offer } from '../../types/types';

function OfferCard(offer: Offer): JSX.Element {
  const [over, setActive] = useState(false);

  if(over) {
    //
  }
  else {
    //
  }

  return(
    <article className="cities__card place-card" onMouseOver={()=>setActive(true)} onMouseLeave={()=>setActive(false)} >
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Properties}${offer.id}`}>
          <img className="place-card__image" src={offer.cardImage.src} width={offer.cardImage.width} height={offer.cardImage.height} alt={offer.cardImage.alt}></img>
        </Link>
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
          <Link to={`${AppRoute.Properties}${offer.id}`}>{offer.description}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default OfferCard;
