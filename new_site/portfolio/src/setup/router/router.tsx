import React from 'react';
import { Routes, Route } from 'react-router-dom';

import * as Pages from './pages';

const Router = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route path={Pages.pageLinks.Home} element={<Pages.Home/>} />
      <Route path={Pages.pageLinks.Projects} element={<Pages.Projects/>} />
      <Route path={Pages.pageLinks.Experience} element={<Pages.Experience/>} />
      <Route path={Pages.pageLinks.Education} element={<Pages.Education/>} />
      <Route path={Pages.pageLinks.Settings} element={<Pages.Settings/>} />
    </Routes>
  );
}

export default Router;