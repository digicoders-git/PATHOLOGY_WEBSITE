import Home from "../pages/Home";
import About from "../pages/About";
import Registration from "../pages/Registration";
import Contact from "../pages/Contact";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsOfService from "../pages/TermsOfService";
import MobileApp from "../pages/MobileApp";
import Pricing from "../pages/Pricing";
import TestDetail from "../pages/TestDetail";
import VideoTutorial from "../pages/VideoTutorial";
import Presentation from "../pages/Presentation";
import Catalogue from "../pages/Catalogue";
import MediaEvent from "../pages/MediaEvent";

const appRoute = [
  { path: "/", element: Home },
  { path: "/about-lab", element: About },
  { path: "/mobile-app", element: MobileApp },
  { path: "/pricing", element: Pricing },
  { path: "/registration", element: Registration },
  { path: "/video-tutorial", element: VideoTutorial },
  { path: "/video-tutorials", element: VideoTutorial },
  { path: "/presentation", element: Presentation },
  { path: "/presentations", element: Presentation },
  { path: "/catalogue", element: Catalogue },
  { path: "/catalogues", element: Catalogue },
  { path: "/media", element: MediaEvent },
  { path: "/media-event", element: MediaEvent },
  { path: "/test/:id", element: TestDetail },
  { path: "/contact", element: Contact },
  { path: "/privacy-policy", element: PrivacyPolicy },
  { path: "/terms-of-service", element: TermsOfService },
];

export default appRoute;
