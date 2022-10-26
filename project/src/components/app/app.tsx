import MainPage from '../../pages/main-page/main-page';
import { Offer } from '../offer-card/offer-card';

type AppPageSettings = {
  cardsCount: number;
  offers: Offer[];
}

function App(appPageSettings: AppPageSettings): JSX.Element {
  const cardsCount = appPageSettings.cardsCount;
  const offers = appPageSettings.offers;
  return(
    <MainPage cardsCount={cardsCount} offers={offers} />
  );
}

export default App;
