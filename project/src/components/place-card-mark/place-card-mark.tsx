import { Offer } from '../../types/types';

type PlaceCardMarkProps = {
  offer: Offer;
}

function PlaceCardMark(props: PlaceCardMarkProps): JSX.Element {
  return(
    <div>
      {
        props.offer.isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
    </div>
  );
}

export default PlaceCardMark;

