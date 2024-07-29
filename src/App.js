import { memo, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./app.css";
import ErrorBoundaries from "./modules/ErrorBoundaries";
import Concepts from "./modules/Concepts";
import MyErrorBoundaries from "./modules/ErrorBoundaries/MyErrorBoundary";
import WithErrorBoundaries from "./modules/ErrorBoundaries/WithErrorBoundaries";
import WithoutErrorBoundaries from "./modules/ErrorBoundaries/WithoutErrorBoundaries";

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

          <Route
            exact
            path="/with-error-boundary"
            element={
              <MyErrorBoundaries>
                <WithErrorBoundaries />
              </MyErrorBoundaries>
            }
          />
          <Route
            exact
            path="/without-error-boundary"
            element={<WithoutErrorBoundaries />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default memo(App);
