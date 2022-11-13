import { Offer } from '../../types/types';

type PlaceCardMarkProps = {
  offer: Offer;
}

function PlaceCardMark(props: PlaceCardMarkProps): JSX.Element {
  return(
    <div>
      {
        props.offer.mark &&
        <div className="place-card__mark">
          <span>{props.offer.mark}</span>
        </div>
      }
    </div>
  );
}

export default PlaceCardMark;

