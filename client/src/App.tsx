import React, { Suspense, useState } from "react";

const Hello = React.lazy(() => import("./Hello"));

export const App: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello World!!!</h1>
      <Suspense fallback="loading..">
        <Hello />
      </Suspense>
      <button onClick={() => setCount(count + 1)}>click</button>
      <h2>{count}</h2>
    </>
  );
};
