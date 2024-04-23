import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage.jsx"
import CarsPage from "./pages/CarsPage.jsx"
import Singin from "./pages/Signin.jsx"
import Signup from "./pages/Signup.jsx"
function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/cars"} element={<CarsPage />} />
        <Route path={"/Girisyap"} element={<Singin />} />
        <Route path={"/kayıtol"} element={<Signup />} />
        <Route path={"/bilesen"} element={<bilesem />} />

      </Routes>
    </>
  )
}

export default App
