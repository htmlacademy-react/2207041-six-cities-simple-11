import { Offer } from '../../types/types';

type PlaceCardMarkProps = {
  offer: Offer;
  className: string;
}

function PlaceCardMark(props: PlaceCardMarkProps): JSX.Element {
  return(
    <div>
      {
        props.offer.isPremium &&
        <div className={props.className}>
          <span>Premium</span>
        </div>
      }
    </div>
  );
}

export default PlaceCardMark;

