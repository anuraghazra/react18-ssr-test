import React, { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import routes from "../routes";

const App: React.FC = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <br />
      <br />
      <Suspense fallback="loading..">
        <Routes>
          {routes.map((route) => {
            return (
              <Route
                key={route.path}
                {...route}
                path={route.path}
                element={route.component}
              />
            );
          })}
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
