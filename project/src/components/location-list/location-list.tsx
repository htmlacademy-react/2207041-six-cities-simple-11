import { CITIES } from '../../mocks/coordinates';
import { City } from '../../types/types';
import Location from '../location/location';

type LocationListProps = {
  selectedCity: City;
}

function LocationList(locationListProps: LocationListProps): JSX.Element {
  return(
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {CITIES.map((item) => (
          <Location
            key={item.name}
            city={item}
            selectedCity={locationListProps.selectedCity.name}
          />
        ))}
      </ul>
    </section>
  );
}

export default LocationList;
