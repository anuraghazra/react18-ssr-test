import React, { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import routes from "../routes";
import useLagRadar from "../useLagRadar";

const App: React.FC = () => {
  useLagRadar();

  return (
    <div>
      <Link to="/with-transition">With transition</Link>
      <br />
      <Link to="/without-transition">Without transition</Link>
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
