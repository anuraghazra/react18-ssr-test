import React from "react";
import WithTransition from "./src/pages/WithTransition";
import WithoutTransition from "./src/pages/WithoutTransition";
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
  {
    path: "/with-transition",
    exact: true,
    component: <WithTransition />,
  },
  {
    path: "/without-transition",
    exact: true,
    component: <WithoutTransition />,
  },
];

export default routes;
