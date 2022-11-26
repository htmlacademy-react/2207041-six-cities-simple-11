import OfferCardList from '../../components/offer-card-list/offer-card-list';
import { Point, TopOffer } from '../../types/types';
import { tabIndex } from '../../types/constants';
import { CITIES, POINTS } from '../../mocks/coordinates';
import Map from '../../components/map/map';
import { useState } from 'react';
import LocationList from '../../components/location-list/location-list';
import { useAppSelector } from '../../hooks/useApp';
import PlaceOptionList from '../../components/place-option-list/place-option-list';

function MainPage(topOffer: TopOffer): JSX.Element {
  const selectedCity = useAppSelector((state) => state.city);
  const selectedOffers = useAppSelector((state) => state.offers);
  const topOfferCity: TopOffer = {cardsCount: topOffer.cardsCount, offers: selectedOffers};
  const currentCity = CITIES.find((item) => item.city.id === selectedCity.id);
  const city = currentCity ? currentCity : CITIES[0];
  const points = POINTS;
  const [selectedPoint, setSelectedPoint] = useState<Point|null>(null);

  const onItemOver = (offerId: number) => {
    const currentPoint = POINTS.find((point) =>
      point.offerId === offerId,
    );
    setSelectedPoint(currentPoint ?? null);
  };

  const onItemLeave = () => {
    setSelectedPoint(null);
  };

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <LocationList selectedCity={selectedCity} />
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{topOfferCity.offers.length} places to stay in {selectedCity.title}</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" {...tabIndex}>
                Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
              <PlaceOptionList />
            </form>
            <OfferCardList className="cities__places-list places__list tabs__content"
              classOfferPrefix="cities"
              topOffer={topOfferCity}
              onItemOver={(offerId: number) => onItemOver(offerId)}
              onItemLeave={onItemLeave}
            />
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
