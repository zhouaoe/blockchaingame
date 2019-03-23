import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import MRoute from './routes/route';
import store from './Store.js';
import './index.css';
import MainLayout from "./components/MainLayout";

ReactDOM.render(
  <Provider store={store}>
      <MainLayout>
      <MRoute />
      </MainLayout>
  </Provider>,
  document.getElementById('root')
);
