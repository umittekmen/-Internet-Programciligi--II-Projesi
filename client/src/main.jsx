import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { MainProvider } from "./utils/context/mainContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MainProvider>
      <ChakraProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ChakraProvider>
    </MainProvider>
  </React.StrictMode>
);
