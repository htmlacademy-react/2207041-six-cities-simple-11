import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/use-app';
import { sortOffersPriceHighLow, sortOffersPriceLowHigh, sortOffersTopRateFirst } from '../../store/actions/actions';
import { fetchOfferAction } from '../../store/api-actions/api-actions';
import { SortMenu, tabIndex } from '../../types/constants';

function PlaceOptionList(): JSX.Element {
  const dispatch = useAppDispatch();
  const offers = useAppSelector((stateOffers) => stateOffers.offers);
  const menuItems = [SortMenu.Popular, SortMenu.PriceLowHigh, SortMenu.PriceHighLow, SortMenu.TopRateFirst];
  const [activeTypeSort, setActiveTypeSort] = useState(false);
  const onItemOver = () => setActiveTypeSort(true);
  const onItemLeave = () => setActiveTypeSort(false);
  const onItemClick = () => {
    setActiveTypeSort(false);
  };

  const [selectedValue, setSelectedValue] = useState<string>(SortMenu.Default);

  const sortOffers = (val: string) => {
    if(offers.length > 0){
      switch (val) {
        case SortMenu.PriceLowHigh:
          dispatch(sortOffersPriceLowHigh(offers));
          break;
        case SortMenu.PriceHighLow:
          dispatch(sortOffersPriceHighLow(offers));
          break;
        case SortMenu.TopRateFirst:
          dispatch(sortOffersTopRateFirst(offers));
          break;
        default:
          dispatch(fetchOfferAction());
          break;
      }
      setSelectedValue(val);
    }
  };

  const listItems = menuItems.map((item) =>
    <li onClick={() => sortOffers(item)} key={item} className={`places__option places__option${(item === selectedValue) ? '--active' : ''}`} {...tabIndex}>{item}</li>
  );

  return(
    <div>
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" {...tabIndex} onMouseOver={onItemOver}>
        {selectedValue}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom places__options${activeTypeSort ? '--opened' : ''}`}
        onMouseLeave={onItemLeave}
        onClick={onItemClick}
      >
        {listItems}
      </ul>
    </div>
  );
}

export default PlaceOptionList;
