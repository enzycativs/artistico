import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LogInSeller from "./pages/LogInSeller";
import RegisterSeller from "./pages/RegisterSeller";
import RegisterSeller1 from "./pages/RegisterSeller1";
import RegisterCustomer from "./pages/RegisterCustomer";
import LogInCustomer from "./pages/LogInCustomer";
import RegisterCustomer1 from "./pages/RegisterCustomer1";
import LoginPage from "./pages/LoginPage";
import Leaf978606fd1 from "./pages/Leaf978606fd1";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/registerseller1":
        title = "";
        metaDescription = "";
        break;
      case "/registerseller":
        title = "";
        metaDescription = "";
        break;
      case "/registercustomer1":
        title = "";
        metaDescription = "";
        break;
      case "/log-in-customer":
        title = "";
        metaDescription = "";
        break;
      case "/registercustomer":
        title = "";
        metaDescription = "";
        break;
      case "/login-page":
        title = "";
        metaDescription = "";
        break;
      case "/leaf978606fd-1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LogInSeller />} />
      <Route path="/registerseller1" element={<RegisterSeller />} />
      <Route path="/registerseller" element={<RegisterSeller1 />} />
      <Route path="/registercustomer1" element={<RegisterCustomer />} />
      <Route path="/log-in-customer" element={<LogInCustomer />} />
      <Route path="/registercustomer" element={<RegisterCustomer1 />} />
      <Route path="/login-page" element={<LoginPage />} />
      <Route path="/leaf978606fd-1" element={<Leaf978606fd1 />} />
    </Routes>
  );
}
export default App;
