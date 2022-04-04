import React from "react";
const About = React.lazy(() => import("./src/pages/About"));
const Home = React.lazy(() => import("./src/pages/Home"));

const routes = [
  {
    path: "/",
    exact: true,
    component: <Home />,
  },
  {
    path: "/about",
    exact: true,
    component: <About />,
  },
];

export default routes;
