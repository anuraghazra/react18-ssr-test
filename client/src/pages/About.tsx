import React from "react";

const About: React.FC = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      About <button onClick={() => setCount(count + 1)}>click</button> {count}
    </div>
  );
};

export default About;
