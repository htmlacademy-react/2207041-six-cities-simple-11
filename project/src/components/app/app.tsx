import MainPage from '../../pages/main-page/main-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from '../../pages/login-page/login-page';
import PropertyPage from '../../pages/property-page/property-page';
import { AppRoute, AuthorizationStatus} from '../../types/constants';
import MainEmptyPage from '../../pages/main-empty-page/main-empty-page';
import PrivateRoute from '../private-route/private-route';
import ScrollToTop from '../scroll-to-top/scroll-to-top';
import {useAppSelector} from '../../hooks/use-app';
import Spinner from '../../pages/spinner/spinner';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const offersLoadingStatus = useAppSelector((state) => state.offersLoadingStatus);

  if (authorizationStatus === AuthorizationStatus.Unknown || offersLoadingStatus) {
    return (
      <Spinner />
    );
  }
  return(
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage/>} />
        <Route index element={<MainPage/>} />
        <Route path={AppRoute.MainEmptyPage} element={<MainEmptyPage />} />
        <Route path={AppRoute.LoginPage}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <LoginPage />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Properties}>
          <Route path={AppRoute.PropertyPage} element={<PropertyPage />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
