import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import appRoute from "./routes/appRoute";
import FixedAppDownload from "./components/FixedAppDownload";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import WelcomeScreen from "./components/WelcomeScreen";
import { AppModalProvider } from "./context/AppModalContext";

const App = () => {
  const [isWelcomeActive, setIsWelcomeActive] = useState(true);

  return (
    <AppModalProvider>
      <div>
        <WelcomeScreen onComplete={() => setIsWelcomeActive(false)} />
        <Navbar />
        {!isWelcomeActive && <FixedAppDownload />}
        {!isWelcomeActive && <FloatingWhatsApp />}
        <Routes>
          {appRoute.map((route, index) => {
            const Com = route.element;
            return <Route key={index} path={route.path} element={<Com />} />;
          })}
        </Routes>
        <Footer />
      </div>
    </AppModalProvider>
  );
};

export default App;
