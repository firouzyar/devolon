import { Router, Route, Switch } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import history from "./history";
import Layout from "../components/Layout/Layout";
//route for components
const Landing = lazy(() => import("../containers/Landing/Landing"));

const Routes = () => (
  <Router history={history}>
    <Suspense fallback={""}>
      <Layout>
        <Switch>
          <Route exact path='/' component={Landing} />
        </Switch>
      </Layout>
    </Suspense>
  </Router>
);

export default Routes;
