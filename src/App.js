import React from "react";

import { MainContent } from "./components/MainContent";
import { Navbar } from "./components/Navbar";
import { getCategoriesListAsync } from "./cnApi";

function App() {
  const [active, setActive] = React.useState("random");

  React.useEffect(() => {
    getCategoriesListAsync().then((list) =>
      localStorage.setItem("categories", list)
    );
  }, []);

  return (
    <>
      <Navbar activePage={active} setActivePage={setActive}></Navbar>
      <MainContent activePage={active}></MainContent>
    </>
  );
}

export default App;
