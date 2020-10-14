import React from "react";
import "./App.css";

import { MainContent } from "./components/MainContent";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <MainContent></MainContent>
    </>
  );
}

export default App;
