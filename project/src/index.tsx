import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {Provider} from 'react-redux';
import {store} from './store';
import { checkAuthAction, fetchOfferAction } from './store/api-actions/api-actions';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

store.dispatch(fetchOfferAction());
store.dispatch(checkAuthAction());

const elementRoot = document.getElementById('root');

if(elementRoot) {
  const root = ReactDOM.createRoot(elementRoot);

  root.render(
    <React.StrictMode>
      <Provider store = {store}>
        <App/>
        <ToastContainer />
      </Provider>
    </React.StrictMode>,
  );
}
