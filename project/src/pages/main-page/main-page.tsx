import OfferCardList from '../../components/offer-card-list/offer-card-list';
import { Point, TopOffer } from '../../types/types';
import { tabIndex } from '../../types/constants';
import { CITIES, POINTS } from '../../mocks/coordinates';
import Map from '../../components/map/map';
import { useState } from 'react';

function MainPage(topOffer: TopOffer): JSX.Element {
  const city = CITIES[0];
  const points = POINTS;
  const [selectedPoint, setSelectedPoint] = useState<Point>();

  const onItemOver = (offerId: number) => {
    const currentPoint = POINTS.find((point) =>
      point.offerId === offerId,
    );
    setSelectedPoint(currentPoint);
  };

  const onItemLeave = () => {
    const currentPoint = POINTS.find((point) =>
      point.offerId === -1,
    );
    setSelectedPoint(currentPoint);
  };

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="/#">
                <span>Paris</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="/#">
                <span>Cologne</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="/#">
                <span>Brussels</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item tabs__item--active" href="/#">
                <span>Amsterdam</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="/#">
                <span>Hamburg</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="/#">
                <span>Dusseldorf</span>
              </a>
            </li>
          </ul>
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">312 places to stay in Amsterdam</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" {...tabIndex}>
                Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                <li className="places__option places__option--active" {...tabIndex}>Popular</li>
                <li className="places__option" {...tabIndex}>Price: low to high</li>
                <li className="places__option" {...tabIndex}>Price: high to low</li>
                <li className="places__option" {...tabIndex}>Top rated first</li>
              </ul>
            </form>
            <OfferCardList className="cities__places-list places__list tabs__content" classOfferPrefix="cities" topOffer={topOffer} onItemOver={(offerId: number) => onItemOver(offerId)} onItemLeave={() => onItemLeave} ></OfferCardList>
          </section>
          <div className="cities__right-section">
            <Map className="cities__map map" city={city} points={points} selectedPoint={selectedPoint}></Map>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainPage;
