import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import BrandPage from "./pages/BrandPage.jsx";
import Signin from "./pages/Signin.jsx";
import Signup from "./pages/Signup.jsx";
import ModelDetails from "./pages/components/ModelDetails.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Admin from "./pages/Admin.jsx";
import Cookies from "js-cookie";
import { useEffect, useContext } from "react";
import { MainContext } from "./utils/context/mainContext";
import Breadcrumb from "./pages/components/breadcrumbs.jsx";
function App() {
  const { isLoggedIn, setIsLoggedIn } = useContext(MainContext);
  const location = useLocation();
  const showBreadcrumb = [
    "/",
    "/login",
    "/signup",
    "/brand/:brandName/:modeldetail",
    "/brand/:brandName",
    "/about-us",
    "/about-us",
  ].includes(location.pathname);

  useEffect(() => {
    setIsLoggedIn(Cookies.get("isLoggedIn"));
  }, [location.pathname]);

  return (
    <>
      {showBreadcrumb && <Breadcrumb />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/" replace /> : <Signin />}
        />
        <Route
          path="/signup"
          element={isLoggedIn ? <Navigate to="/" replace /> : <Signup />}
        />
        <Route path="/brand/:brandName" element={<BrandPage />} />
        <Route
          path="/brand/:brandName/:modeldetail"
          element={<ModelDetails />}
        />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;
