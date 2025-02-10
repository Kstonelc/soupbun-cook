import React, { useEffect } from "react";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { RootNavigation } from "./src/screens/RootNavigation";
import "./global.css";

const App = () => {
  //region 初始化

  useEffect(() => {
    initialize();
    return () => {
      destroy();
    };
  }, []);

  const initialize = async () => {};

  const destroy = async () => {};

  //endregion

  return <AppWrapper />;
};

const AppWrapper = () => {
  return <RootNavigation />;
};

export default App;
