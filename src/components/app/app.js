import React from "react";
import { Route, Routes } from "react-router-dom";

import { MainLayout, ScheduleLayout } from '../layouts';
import {
  MainPage,
  SchedulePage
} from "../pages";
import Page404 from "../page-404-content";

import './app.scss';


const App = () => {
  return (
    <Routes>
      <Route path={'/'} element={<MainLayout/>}>
        <Route index exact element={<MainPage/>}/>
        <Route path={'info'} element={<div>info</div>}/>
        <Route path={'help'} element={<div>help</div>}/>
        <Route path={'*'} element={<Page404/>}/>
        <Route path={'schedule/'} element={<ScheduleLayout/>}>
          <Route path={'groups'} element={<SchedulePage/>}/>
          <Route path={'teachers'} element={<SchedulePage/>}/>
          <Route path={'auditoriums'} element={<SchedulePage/>}/>
        </Route>
      </Route>
    </Routes>
  );
};

export default App;