import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { StickyNavbar } from "./components/Navbar/Navbar";
import { Home } from "./pages/Home/Home";
import { AllRoute } from "./Routes/AllRoute";

function App() {
  return (
    <div>
      {/* <Routes /> */}
      <StickyNavbar />
      <AllRoute />
    </div>
  );
}

export default App;
