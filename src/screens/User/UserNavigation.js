import React, { useEffect, useRef } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import _example from "@/src/_example";
import { Icon, EditIcon } from "@/components/ui/icon";
import { Box, View, Text } from "@/src/components";

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
          height: 80,
          backgroundColor: "white",
        },
      })}
    >
      <Tab.Screen
        name={"_example"}
        component={_example}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <View className={"items-center mt-5"}>
                <Icon as={EditIcon} className={"text-primary-500"}></Icon>
                <Text className={"text-primary-500 text-sm"}>编辑</Text>
              </View>
            );
          },
          tabBarLabelStyle: ({ focused, color, size }) => {
            return { color: focused ? "blue" : "black" };
          },
        }}
      />
    </Tab.Navigator>
  );
};

export { UserNavigation };
