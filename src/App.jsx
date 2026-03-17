import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route, useLocation } from "react-router-dom";
import appRoute from "./routes/appRoute";
import FixedAppDownload from "./components/FixedAppDownload";
import Loader from "./components/Loader";

const App = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div>
      {loading && <Loader />}
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
