import React, { Fragment } from "react";
import Route from "./Route/index";
import { GlobalStyles } from "./assets/globalStyles";
function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Route />
    </Fragment>
  );
}

export default App;
