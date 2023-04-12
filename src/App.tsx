import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './assets/fonts/style.css';
import './assets/global.scss';
import { frontendRoutes } from './consts';
import { MainPage } from './pages/MainPage';
import { LessonsPage } from './pages/LessonsPage';
import { TeamPage } from './pages/TeamPage';
import { DocsPage } from './pages/DocsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<MainPage />} />
        <Route path={frontendRoutes.main} element={<MainPage />} />
        <Route path={frontendRoutes.lessons} element={<LessonsPage />} />
        <Route path={frontendRoutes.members} element={<TeamPage />} />
        <Route path={frontendRoutes.docs} element={<DocsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
