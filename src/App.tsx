import React, {FC} from 'react';
import { Routes, Route } from 'react-router-dom';
import {Navbar} from "./components/Navbar";
import {CountersPage} from "./components/Pages/CountersPage";
import {AboutPage} from "./components/Pages/AboutPage";

const App: FC = () => {

  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<CountersPage />}/>
          <Route path="about" element={<AboutPage />}/>
        </Routes>

      </div>
    </>
  );
}

export default App;
