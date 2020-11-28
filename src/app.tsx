import React from "react";
import { useRedirect, useRoutes } from "hookrouter";

import BaseLayout from "src/layouts/base";
import Dashboard from "src/pages/dashboard";
import Screenshots from "src/pages/screenshots";
import Surveys from "src/pages/surveys";

const routes = {
  "/": () => <Dashboard />,
  "/screenshots": () => <Screenshots />,
  "/surveys": () => <Surveys />
};

const App = () => {
  // const result = useRoutes(routes);

  return <BaseLayout>{<Screenshots /> || <p>404 Not Found</p>}</BaseLayout>;
};

export default App;
