import React, { Suspense } from "react";

const Hello = React.lazy(() => import("../Hello"));

const Form: React.FC = () => {
  const id = React.useId();
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e);
        }}
      >
        <label htmlFor={`${id}-name`}>Name</label>
        <input id={`${id}-name`} />
        <label htmlFor={`${id}-email`}>Email</label>
        <input id={`${id}-email`} />
        <button type="submit">submit</button>
      </form>
    </>
  );
};

const Home: React.FC = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <Suspense fallback="loading..">
        <Hello />
      </Suspense>
      <Suspense fallback="loading..">
        <Form />
      </Suspense>
      Home <button onClick={() => setCount(count + 1)}>click</button> {count}
    </div>
  );
};

export default Home;
