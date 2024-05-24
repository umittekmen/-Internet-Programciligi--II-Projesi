import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import BrandPage from "./pages/BrandPage.jsx";
import Singin from "./pages/Signin.jsx";
import Signup from "./pages/Signup.jsx";
import ModelDetails from "./pages/ModelDetails.jsx";
import AboutUs from "./pages/AboutUs.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/Girisyap" element={<Singin />} />
        <Route path="/kayıtol" element={<Signup />} />
        <Route path="/brand/:brandName" element={<BrandPage />} />
        <Route path="/brand/:brandName/:modeldetail" element={<ModelDetails />} />
        <Route path="/Hakkımızda" element={<AboutUs />} />
      </Routes>
    </>
  )
}

export default App;
