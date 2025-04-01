import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals'; // ✅ Import this
import { Provider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';

import store from "../src/store";  // Import the store

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <App />
</Provider>
);

reportWebVitals(); // ✅ Call it correctly


