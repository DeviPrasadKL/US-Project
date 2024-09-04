import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import store from './store/Store.js';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';

/**
 * Creates a persisted store instance using redux-persist.
 * This instance is used to manage the state and rehydrate it on app start.
 * 
 * @type {Object} 
 * @property {Function} persistStore - Function that creates a persistor for the store.
 */
let persistor = persistStore(store);

// Render the React application into the DOM element with id 'root'.
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    {/* 
      Suspense component is used for handling code-splitting and lazy-loaded components.
      The fallback prop specifies what to display while the lazy components are loading.
    */}
    <Suspense fallback={<div>Loading...</div>}>
      {/*
        PersistGate delays the rendering of the app until the persisted state has been retrieved and saved to redux.
        This ensures that the app can rehydrate its state correctly on startup.
      */}
      <PersistGate persistor={persistor}>
        {/*
          BrowserRouter is used for handling routing in the application.
          The basename prop specifies the base URL for all routes.
        */}
        <BrowserRouter basename='/'>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Suspense>
  </Provider>,
);
