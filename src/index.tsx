import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { App } from './app';
import { Login } from './modules';
import { ROUTES } from './router';
import { ThemeProvider } from './theme';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <ThemeProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path={ROUTES.ROOT_ROUTE} element={<Login />} />
          <Route path={ROUTES.PHONE_NUMBER_CHANGE} element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>,
);
