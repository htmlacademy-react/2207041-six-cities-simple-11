import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/useApp';
import { CITY_OFFERS } from '../../mocks/city_offers';
import { OFFERS } from '../../mocks/offers';
import { changeCity, fillOffers } from '../../store/actions/actions';
import { City } from '../../types/types';

type LocationProps = {
  city: City;
  selectedCityId: number;
}

function Location(item: LocationProps): JSX.Element {
  const dispatch = useAppDispatch();

  const changeCityHandler = (city:City) => {
    dispatch(changeCity(city));
    const currentOffers = CITY_OFFERS.find((i) => i.city.id === city.id);
    const offers = currentOffers ? currentOffers.offers : OFFERS;
    dispatch(fillOffers(offers));
  };

  return(
    <li className="locations__item">
      <Link className={`locations__item-link tabs__item${(item.city.id === item.selectedCityId) ? ' tabs__item--active' : ''}`}
        to='#'
        onClick={() => changeCityHandler(item.city)}
      >{item.city.title}
      </Link>
    </li>
  );
}

export default Location;
