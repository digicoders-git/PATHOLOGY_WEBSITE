import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Registration from "../pages/Registration";
import Contact from "../pages/Contact";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsOfService from "../pages/TermsOfService";
import Hematology from "../pages/Hematology";
import Biochemistry from "../pages/Biochemistry";
import Microbiology from "../pages/Microbiology";
import Immunology from "../pages/Immunology";

const appRoute = [
  { path: "/", element: Home },
  { path: "/about-lab", element: About },
  { path: "/tests-services", element: Services },
  { path: "/registration", element: Registration },
  { path: "/contact", element: Contact },
  { path: "/privacy-policy", element: PrivacyPolicy },
  { path: "/terms-of-service", element: TermsOfService },
  { path: "/hematology", element: Hematology },
  { path: "/biochemistry", element: Biochemistry },
  { path: "/microbiology", element: Microbiology },
  { path: "/immunology", element: Immunology },
];

export default appRoute;
