import { memo, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./app.css";
import ErrorBoundaries from "./modules/ErrorBoundaries";
import Concepts from "./modules/Concepts";

const App = () => {
  useEffect(() => {
    const currentUrl = window.location.pathname;
    if (currentUrl === "/") window.open("/concepts", "_self");
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/concepts" element={<Concepts />} />
          <Route exact path="/error-boundaries" element={<ErrorBoundaries />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default memo(App);
