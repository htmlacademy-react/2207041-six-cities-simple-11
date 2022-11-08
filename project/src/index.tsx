import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offers } from './mocks/offers';

enum AppSettings {
  CardsCount = 5
}

const elRoot = document.getElementById('root');

if(elRoot) {
  const root = ReactDOM.createRoot(elRoot);

  root.render(
    <React.StrictMode>
      <App
        cardsCount = {AppSettings.CardsCount}
        offers={offers}
      />
    </React.StrictMode>,
  );
}
