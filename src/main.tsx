import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './redux/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-e3vutojh0e36c0c0.us.auth0.com"
      clientId="mAZzmJev4RQ75mRck1cuTIlBfkvxNyQa"  
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: "https://rock-app",  
        scope: "openid profile email"
      }}
      onRedirectCallback={(appState) =>
        window.history.replaceState({}, document.title, appState?.target || '/')
      }
    >
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </Auth0Provider>
  </React.StrictMode>
);