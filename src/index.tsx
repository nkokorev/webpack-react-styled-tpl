import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { App } from './app';
import { Lenta } from './assets';
import { ROUTES } from './router';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path={ROUTES.ROOT_ROUTE} element={<Lenta />} />
        <Route path={ROUTES.PHONE_NUMBER_CHANGE} element={<Lenta />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
