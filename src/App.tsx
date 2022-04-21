import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Category from "./pages/Category/Category";
import Main from "./pages/Main/Main";

const App = (): JSX.Element => (
  <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/:category" element={<Category />} />
    </Routes>
  </>
);

export default App;
