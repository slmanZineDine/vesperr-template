import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import AOS from "aos";
import "./index.css";
import "aos/dist/aos.css";
import { apiSlice } from "./api/apiSlice.js";
import { ApiProvider } from "@reduxjs/toolkit/query/react";

// AOS Animation
AOS.init({
   once: true, // whether animation should happen only once - while scrolling down
});

ReactDOM.createRoot(document.getElementById("root")).render(
   // <React.StrictMode>
   <ApiProvider api={apiSlice}>
      <App />
   </ApiProvider>
   // </React.StrictMode>,
);
