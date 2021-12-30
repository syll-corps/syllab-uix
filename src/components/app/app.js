import React from "react";
import { Route, Routes } from "react-router-dom";

import MainLayout from "../main-layout";
import { MainPage } from "../pages";
import Page404 from "../page-404-content";

import './app.css';


const App = () => {
  return (
    <Routes>
      <Route path={'/'} element={<MainLayout/>}>
        <Route index exact element={<MainPage/>}/>
        <Route path={'schedule'} element={<div>info</div>}/>
        <Route path={'info'} element={<div>info</div>}/>
        <Route path={'help'} element={<div>help</div>}/>
        <Route path={'*'} element={<Page404/>}/>
      </Route>
    </Routes>
  );
};

export default App;