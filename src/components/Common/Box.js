import React from "react";
import appHelper from "../../AppHelper";
import { View } from "./View";

const Box = ({
  safeArea = [true, true, true, true], // [top, right, bottom, left]
  floating = false,
  scroll = null, // vertical, horizontal
  flex = true,
  className,
  style,
  children,
  ...props
}) => {
  const screenPadding = 16;
  const insets = appHelper.insets;
  const boxStyle = {
    paddingTop: safeArea[0] ? insets.top + screenPadding : 0,
    paddingRight: safeArea[1] ? insets.right + screenPadding : 0,
    paddingBottom: safeArea[2] ? insets.bottom + screenPadding : 0,
    paddingLeft: safeArea[3] ? insets.left + screenPadding : 0,
  };
  if (floating) {
    boxStyle.position = "absolute";
    if (flex) {
      boxStyle.top = 0;
      boxStyle.right = 0;
      boxStyle.bottom = 0;
      boxStyle.left = 0;
    }
  } else {
    if (flex) {
      boxStyle.flex = 1;
    }
  }

  return (
    <View
      {...props}
      scroll={scroll}
      style={[boxStyle, style]}
      className={className}
    >
      {children}
    </View>
  );
};

export { Box };
