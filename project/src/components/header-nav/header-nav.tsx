import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/use-app';
import { AppRoute, AuthorizationStatus } from '../../types/constants';
import UserAuth from '../user-auth/user-auth';
import UserGuest from '../user-guest/user-guest';

function HeaderNav(): JSX.Element{
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  return(
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to={AppRoute.Main}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {(authorizationStatus === AuthorizationStatus.Auth)
                ? <UserAuth />
                : <UserGuest />}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default HeaderNav;
