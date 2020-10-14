import React from "react";

import { MainContent } from "./components/MainContent";
import { Navbar } from "./components/Navbar";

function App() {
  const [active, setActive] = React.useState("random");

  return (
    <>
      <Navbar activePage={active} setActivePage={setActive}></Navbar>
      <MainContent activePage={active}></MainContent>
    </>
  );
}

export default App;
