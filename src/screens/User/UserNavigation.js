import React, { useEffect, useRef } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import _example from "@/src/_example";

const Tab = createBottomTabNavigator();

const UserNavigation = ({ route }) => {
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
  //region 方法

  //endregion

  return (
    <Tab.Navigator
      id={1}
      initialRouteName={route.params?.defaultTab || "_example"}
      backBehavior={"history"}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 96,
          backgroundColor: "white",
          borderColor: "grey",
        },
      })}
    >
      <Tab.Screen name={"_example"} component={_example} />
    </Tab.Navigator>
  );
};

export { UserNavigation };
