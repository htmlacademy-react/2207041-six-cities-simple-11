import { Navigate } from 'react-router-dom';
import { AppRoute } from './types/constants';

type PrivateRouteProps = {
  autorizationStatus: AutorizationStatus;
  children: JSX.Element;
}

export enum AutorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {autorizationStatus, children} = props;
  return (
    autorizationStatus === AutorizationStatus.NoAuth
      ? children
      : <Navigate to={AppRoute.Root} />
  );
}

export default PrivateRoute;
