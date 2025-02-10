import React from "react";
import { View } from "./View";

const Screen = ({ style, children, ...props }) => {
  return (
    <View
      {...props}
      style={[
        {
          flex: 1,
          backgroundColor: "#F2F5F9",
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

export { Screen };
