import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import appRoute from "./routes/appRoute";
import FixedAppDownload from "./components/FixedAppDownload";

const App = () => {
  return (
    <div>
      <Navbar />
      <FixedAppDownload />
      <Routes>
        {appRoute.map((route, index) => {
          const Com = route.element;
          return <Route key={index} path={route.path} element={<Com />} />;
        })}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
