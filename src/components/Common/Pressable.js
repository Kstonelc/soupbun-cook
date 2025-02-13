import React from "react";
import { Pressable as PressableRN } from "react-native";

const Pressable = ({ className, style, children, ...props }) => {
  return (
    <PressableRN
      {...props}
      style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }, style]}
      className={className}
    >
      {children}
    </PressableRN>
  );
};

export { Pressable };
