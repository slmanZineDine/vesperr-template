import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";
// AOS Animation
AOS.init({
   once: true,
});

ReactDOM.createRoot(document.getElementById("root")).render(
   // <React.StrictMode>
   <App />
   // </React.StrictMode>,
);