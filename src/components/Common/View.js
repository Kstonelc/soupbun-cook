import React from "react";
import { View as ViewRN, ScrollView as ScrollViewRN } from "react-native";
import { Box as BoxGS } from "@/components/ui/box";

const View = ({
  scroll = null, // vertical, horizontal
  className,
  style,
  children,
  ...props
}) => {
  return scroll ? (
    <ScrollViewRN
      {...props}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      horizontal={scroll === "horizontal"}
      className={className}
      contentContainerStyle={[
        {
          flexDirection: scroll === "horizontal" ? "row" : "column",
        },
        style,
      ]}
    >
      {children}
    </ScrollViewRN>
  ) : (
    <ViewRN {...props} className={className} style={style}>
      {children}
    </ViewRN>
  );
};

export { View };
