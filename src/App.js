import React, { Fragment } from "react";
import Planets from "./components/Planets";
import Planet from "./components/Planets/planet";

function App() {
  return (
    <Fragment>
      <Planets />

      <Planet />
    </Fragment>
  );
}

export default App;
