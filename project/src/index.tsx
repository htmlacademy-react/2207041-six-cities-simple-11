import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { OFFERS } from './mocks/offers';
import {Provider} from 'react-redux';
import {store} from './store';

enum AppSettings {
  CardsCount = 5
}

const elRoot = document.getElementById('root');

if(elRoot) {
  const root = ReactDOM.createRoot(elRoot);

  root.render(
    <React.StrictMode>
      <Provider store = {store}>
        <App
          cardsCount = {AppSettings.CardsCount}
          offers={OFFERS}
        />
      </Provider>
    </React.StrictMode>,
  );
}
