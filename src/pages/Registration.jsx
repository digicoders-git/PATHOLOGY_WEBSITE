import React, { useEffect } from "react";
import RegistrationHero from "../components/registration/RegistrationHero";
import RegistrationForm from "../components/registration/RegistrationForm";
import RegistrationNote from "../components/registration/RegistrationNote";

const Registration = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <RegistrationHero />
      <RegistrationForm />
      <RegistrationNote />
    </main>
  );
};

export default Registration;
