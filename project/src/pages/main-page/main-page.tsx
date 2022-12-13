import OfferCardList from '../../components/offer-card-list/offer-card-list';
import { Point } from '../../types/types';
import { AppRoute } from '../../types/constants';
import Map from '../../components/map/map';
import { Fragment, useEffect, useState } from 'react';
import LocationList from '../../components/location-list/location-list';
import { useAppSelector } from '../../hooks/use-app';
import PlaceOptionList from '../../components/place-option-list/place-option-list';
import HeaderNav from '../../components/header-nav/header-nav';
import { useNavigate } from 'react-router-dom';


function MainPage(): JSX.Element {
  const navigate = useNavigate();
  const selectedCity = useAppSelector((state) => state.city);
  const selectedOffers = useAppSelector((state) => state.offers.filter((i) => i.city.name === selectedCity.name));
  const city = selectedOffers.length > 0 ? selectedOffers[0].city : selectedCity;
  const points: Point[] = selectedOffers.map((item) => ({id:item.id, title:item.title, latitude: item.location.latitude, longitude: item.location.longitude}));
  const [selectedPoint, setSelectedPoint] = useState<Point|null>(null);

  const onItemOver = (id: number) => {
    const currentPoint = points.find((point) =>
      point.id === id,
    );
    setSelectedPoint(currentPoint ?? null);
  };

  const onItemLeave = () => {
    setSelectedPoint(null);
  };

  useEffect(() => {
    if(selectedOffers?.length === 0){
      navigate(AppRoute.MainEmptyPage);
    }
  });

  return (
    <Fragment>
      <HeaderNav />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <LocationList selectedCity={selectedCity} />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{selectedOffers.length} places to stay in {selectedCity.name}</b>
              <form className="places__sorting" action="#" method="get">
                <PlaceOptionList />
              </form>
              <OfferCardList className="cities__places-list places__list tabs__content"
                classOfferPrefix="cities"
                offers={selectedOffers}
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
    </Fragment>
  );
}

export default MainPage;
