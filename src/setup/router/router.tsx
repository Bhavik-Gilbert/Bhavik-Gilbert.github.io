import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import * as Pages from './pages';

const Router = () => {
  return (
    <div className="page">
      <Routes> {/* The Switch decides which component to show based on the current URL.*/}
        <Route path={Pages.pageLinks.Home} element={<Pages.Home/>} />
        <Route path={Pages.pageLinks.Projects} element={<Pages.Projects/>} />
        <Route path={Pages.pageLinks.Experience} element={<Pages.Experience/>} />
        <Route path={Pages.pageLinks.Education} element={<Pages.Education/>} />
        <Route path={Pages.pageLinks.Contact} element={<Pages.Contact/>} />
        <Route path="*" element={<Navigate to={Pages.pageLinks.Home} replace/>} />
      </Routes>
    </div>
  );
}

export default Router;