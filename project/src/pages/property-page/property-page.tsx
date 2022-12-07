import { useParams } from 'react-router-dom';
import ReviewPlace from '../../components/review-place/review-place';
import { CITIES, NEAR_POINTS } from '../../mocks/coordinates';
import Map from '../../components/map/map';
import OfferCardList from '../../components/offer-card-list/offer-card-list';
import { Point, TopOffer } from '../../types/types';
import { NEAR_OFFERS } from '../../mocks/near_offers';
import { useState } from 'react';
import { useAppSelector } from '../../hooks/useApp';
import HeaderNav from '../../components/header-nav/header-nav';

function PropertyPage(): JSX.Element {
  const selectedOffers = useAppSelector((state) => state.offers);
  const params = useParams();
  const id: string = params.id ?? ''; // Добавлено чтобы в будущем делать выборку из списка по id b отображения
  const offer = selectedOffers.find((item) => item.id.toString() === id);
  const city = offer ? offer.city : CITIES[0];
  const points = NEAR_POINTS;
  const topOffer: TopOffer = {cardsCount: NEAR_OFFERS.length, offers: NEAR_OFFERS};
  const [selectedPoint, setSelectedPoint] = useState<Point|null>(null);

  const onItemOver = (offerId: number) => {
    const currentPoint = NEAR_POINTS.find((point) =>
      point.offerId === offerId,
    );
    setSelectedPoint(currentPoint ?? null);
  };

  const onItemLeave = () => {
    setSelectedPoint(null);
  };

  return(
    <html lang="en">
      <head>
        <meta charSet="utf-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>six cities simple: property</title>
        <link rel="stylesheet" href="css/main.css"/>
      </head>

      <body>
        <div className="page">
          <div style={{display: 'none'}}>
            <svg xmlns="http://www.w3.org/2000/svg">
              <symbol id="icon-arrow-select" viewBox="0 0 7 4">
                <path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path>
              </symbol>
              <symbol id="icon-bookmark" viewBox="0 0 17 18">
                <path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path>
              </symbol>
              <symbol id="icon-star" viewBox="0 0 13 12">
                <path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path>
              </symbol>
            </svg>
          </div>

          <HeaderNav />

          <main className="page__main page__main--property">
            <section className="property">
              <div className="property__gallery-container container">
                <div className="property__gallery">
                  <div className="property__image-wrapper">
                    <img className="property__image" src="img/room.jpg" alt="Phоto studio"/>
                  </div>
                  <div className="property__image-wrapper">
                    <img className="property__image" src="img/apartment-01.jpg" alt="Phоto studio"/>
                  </div>
                  <div className="property__image-wrapper">
                    <img className="property__image" src="img/apartment-02.jpg" alt="Phоto studio"/>
                  </div>
                  <div className="property__image-wrapper">
                    <img className="property__image" src="img/apartment-03.jpg" alt="Phоto studio"/>
                  </div>
                  <div className="property__image-wrapper">
                    <img className="property__image" src="img/studio-01.jpg" alt="Phоto studio"/>
                  </div>
                  <div className="property__image-wrapper">
                    <img className="property__image" src="img/apartment-01.jpg" alt="Phоto studio"/>
                  </div>
                </div>
              </div>
              <div className="property__container container">
                <div className="property__wrapper">
                  <div className="property__mark">
                    <span>Premium</span>
                  </div>
                  <div className="property__name-wrapper">
                    <h1 className="property__name" title={`offer/${id}`}>
                      Beautiful &amp; luxurious studio at great location
                      {offer?.description}
                    </h1>
                  </div>
                  <div className="property__rating rating">
                    <div className="property__stars rating__stars">
                      <span style={{width: '80%'}}></span>
                      <span className="visually-hidden">Rating</span>
                    </div>
                    <span className="property__rating-value rating__value">4.8</span>
                  </div>
                  <ul className="property__features">
                    <li className="property__feature property__feature--entire">
                      Apartment
                    </li>
                    <li className="property__feature property__feature--bedrooms">
                      3 Bedrooms
                    </li>
                    <li className="property__feature property__feature--adults">
                      Max 4 adults
                    </li>
                  </ul>
                  <div className="property__price">
                    <b className="property__price-value">{offer?.price}</b>
                    <span className="property__price-text">&#47;&nbsp;night</span>
                  </div>
                  <div className="property__inside">
                    <h2 className="property__inside-title">What&apos;s inside</h2>
                    <ul className="property__inside-list">
                      <li className="property__inside-item">
                        Wi-Fi
                      </li>
                      <li className="property__inside-item">
                        Washing machine
                      </li>
                      <li className="property__inside-item">
                        Towels
                      </li>
                      <li className="property__inside-item">
                        Heating
                      </li>
                      <li className="property__inside-item">
                        Coffee machine
                      </li>
                      <li className="property__inside-item">
                        Baby seat
                      </li>
                      <li className="property__inside-item">
                        Kitchen
                      </li>
                      <li className="property__inside-item">
                        Dishwasher
                      </li>
                      <li className="property__inside-item">
                        Cabel TV
                      </li>
                      <li className="property__inside-item">
                        Fridge
                      </li>
                    </ul>
                  </div>
                  <div className="property__host">
                    <h2 className="property__host-title">Meet the host</h2>
                    <div className="property__host-user user">
                      <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                        <img className="property__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar"/>
                      </div>
                      <span className="property__user-name">
                        Angelina
                      </span>
                      <span className="property__user-status">
                        Pro
                      </span>
                    </div>
                    <div className="property__description">
                      <p className="property__text">
                        A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                      </p>
                      <p className="property__text">
                        An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                      </p>
                    </div>
                  </div>
                  <ReviewPlace />
                </div>
              </div>
              <Map className="property__map map" city={city} points={points} selectedPoint={selectedPoint}></Map>
            </section>
            <div className="container">
              <section className="near-places places">
                <h2 className="near-places__title">Other places in the neighbourhood</h2>
                <OfferCardList className="near-places__list places__list"
                  classOfferPrefix="near-places"
                  topOffer={topOffer}
                  onItemOver={(offerId: number) => onItemOver(offerId)}
                  onItemLeave={() => onItemLeave}
                />
              </section>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}

export default PropertyPage;
