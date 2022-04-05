import React from "react";
import Chart from "../Chart";

const WithoutTransition: React.FC = () => {
  const [text, setText] = React.useState("");

  return (
    <div>
      <h2>Without React.startTransition</h2>
      <Chart enableTransition={false} amount={text.length * 5} />
      <input
        style={{
          fontSize: 24,
          padding: 5,
          paddingTop: 10,
          paddingBottom: 10,
          width: 400,
        }}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default WithoutTransition;
