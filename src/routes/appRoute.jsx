import Home from "../pages/Home";
import About from "../pages/About";
import Registration from "../pages/Registration";
import Contact from "../pages/Contact";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsOfService from "../pages/TermsOfService";
import MobileApp from "../pages/MobileApp";
import Pricing from "../pages/Pricing";

const appRoute = [
  { path: "/", element: Home },
  { path: "/about-lab", element: About },
  { path: "/mobile-app", element: MobileApp },
  { path: "/pricing", element: Pricing },
  { path: "/registration", element: Registration },
  { path: "/contact", element: Contact },
  { path: "/privacy-policy", element: PrivacyPolicy },
  { path: "/terms-of-service", element: TermsOfService },
];

export default appRoute;
