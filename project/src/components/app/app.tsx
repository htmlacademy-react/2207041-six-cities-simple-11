import MainPage from '../../pages/main-page/main-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import { Offer } from '../offer-card/offer-card';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../layout';
import LoginPage from '../../pages/login-page/login-page';
import PropertyPage from '../../pages/property-page/property-page';
import { AppRoute } from '../../types/constants';
import PropertyNotLoggedPage from '../../pages/property-not-logged-page/property-not-logged-page';
import MainEmptyPage from '../../pages/main-empty-page/main-empty-page';
import PrivateRoute, { AutorizationStatus } from '../../private-route';


type AppPageSettings = {
  cardsCount: number;
  offers: Offer[];
}

function App(appPageSettings: AppPageSettings): JSX.Element {
  const cardsCount = appPageSettings.cardsCount;
  const offers = appPageSettings.offers;
  return(
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<Layout />} />
        <Route path={AppRoute.Main} element={<MainPage cardsCount={cardsCount} offers={offers} />} />
        <Route index element={<MainPage cardsCount={cardsCount} offers={offers} />} />
        <Route path={AppRoute.MainEmptyPage} element={<MainEmptyPage />} />
        <Route path={AppRoute.LoginPage}
          element={
            <PrivateRoute autorizationStatus={AutorizationStatus.NoAuth}>
              <LoginPage />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.PropertyPage} element={<PropertyPage />} />
        <Route path={AppRoute.PropertyNotLoggedPage} element={<PropertyNotLoggedPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
