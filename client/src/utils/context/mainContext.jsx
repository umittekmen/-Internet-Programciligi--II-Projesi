import { createContext, useState } from "react";
import Cookies from "js-cookie";

const MainContext = createContext();

const MainProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(Cookies.get("isLoggedIn"));
  const [accountDetails, setAccountDetails] = useState(null);

  const logout = () => {
    Cookies.remove("isLoggedIn");
    setIsLoggedIn(false);
    setAccountDetails(null);
  };

  return (
    <MainContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn, // setIsLoggedIn'i değer olarak sağla
        accountDetails,
        setAccountDetails,
        logout,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export { MainContext, MainProvider };
