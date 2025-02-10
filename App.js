import React, { useEffect, useState } from "react";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { config } from "@/components/ui/gluestack-ui-provider/config";
import { RootNavigation } from "./src/screens/RootNavigation";
import appHelper from "@/src/AppHelper";
import "./global.css";

const App = () => {
  appHelper.info("App Started");
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
  return (
    <GluestackUIProvider config={config} mode={"light"}>
      <RootNavigation />
    </GluestackUIProvider>
  );
};

export default App;
