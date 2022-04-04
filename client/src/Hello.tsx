import React from "react";

const Hello = () => {
  const [count, setCount] = React.useState(0);

  return (
    <p>
      <button onClick={() => setCount(count + 1)}>click</button> {count}
    </p>
  );
};

export default Hello;
