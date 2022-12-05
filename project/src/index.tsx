import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {Provider} from 'react-redux';
import {store} from './store';
import {fetchOfferAction/*, checkAuthAction*/} from './store/api-actions/api-actions';

store.dispatch(fetchOfferAction());
//store.dispatch(checkAuthAction());

const elRoot = document.getElementById('root');

if(elRoot) {
  const root = ReactDOM.createRoot(elRoot);

  root.render(
    <React.StrictMode>
      <Provider store = {store}>
        <App/>
      </Provider>
    </React.StrictMode>,
  );
}
