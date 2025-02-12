import React from "react";
import { View } from "./View";

const Screen = ({ className, children, ...props }) => {
  return (
    <View {...props} className={`flex flex-1 bg-background-50 ${className}`}>
      {children}
    </View>
  );
};

export { Screen };
