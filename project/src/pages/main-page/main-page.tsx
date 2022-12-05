import OfferCardList from '../../components/offer-card-list/offer-card-list';
import { Point, TopOffer } from '../../types/types';
import { AppSettings } from '../../types/constants';
import Map from '../../components/map/map';
import { useState } from 'react';
import LocationList from '../../components/location-list/location-list';
import { useAppSelector } from '../../hooks/useApp';
import PlaceOptionList from '../../components/place-option-list/place-option-list';


function MainPage(): JSX.Element {
  const selectedCity = useAppSelector((state) => state.city);
  const selectedOffers = useAppSelector((state) => state.offers.filter((i) => i.city.name === selectedCity.name));
  const topOfferCity: TopOffer = {cardsCount: AppSettings.CardsCount, offers: selectedOffers};
  const city = selectedOffers.length > 0 ? selectedOffers[0].city : selectedCity;
  const points: Point[] = [];
  selectedOffers.map((item) =>
    points.push({offerId:item.id, title:item.title, latitude: item.location.latitude, longitude: item.location.longitude})
  );
  const [selectedPoint, setSelectedPoint] = useState<Point|null>(null);

  const onItemOver = (offerId: number) => {
    const currentPoint = points.find((point) =>
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
            <b className="places__found">{topOfferCity.offers.length} places to stay in {selectedCity.name}</b>
            <form className="places__sorting" action="#" method="get">
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
