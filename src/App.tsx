import React, { useEffect, useState, FunctionComponent } from "react";

const App: FunctionComponent = () => {
  const [data, setData] = useState({});

  console.log("test log");

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      <header>
        <p>Hello world!</p>
      </header>
    </div>
  );
};

export default App;
