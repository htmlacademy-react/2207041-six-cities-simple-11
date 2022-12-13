import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/use-app';
import { changeCity, fillOffers } from '../../store/actions/actions';
import { fetchOfferAction } from '../../store/api-actions/api-actions';
import { City } from '../../types/types';

type LocationProps = {
  city: City;
  selectedCity: string;
}

function Location(item: LocationProps): JSX.Element {
  const dispatch = useAppDispatch();
  const selectedOffers = useAppSelector((state) => state.offers);

  const handleCityChange = (city:City) => {
    dispatch(changeCity(city));
    dispatch(fetchOfferAction());
    const offers = selectedOffers.filter((i) => i.city.name === city.name);
    dispatch(fillOffers(offers));
  };

  return(
    <li className="locations__item">
      <Link className={`locations__item-link tabs__item${(item.city.name === item.selectedCity) ? ' tabs__item--active' : ''}`}
        to='#'
        onClick={() => handleCityChange(item.city)}
      >{item.city.name}
      </Link>
    </li>
  );
}

export default Location;
