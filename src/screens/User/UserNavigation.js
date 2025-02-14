import React, { useEffect, useRef } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Path, G, Defs, ClipPath, Rect, Svg } from "react-native-svg";
import * as Haptics from "expo-haptics";
import _example from "@/src/_example";
import { Icon, createIcon } from "@/components/ui/icon";
import { Box, View, Text } from "@/src/components";

import { UserSetting } from "../User/UserSetting";
import { IngredientsHome } from "../Ingredients";
import Publish from "../Publish";
import { User, Plus, Refrigerator } from "lucide-react-native";

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
      initialRouteName={route.params?.defaultTab || "IngredientsHome"}
      backBehavior={"history"}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 80,
          backgroundColor: "white",
        },
      })}
      // 设置震动反馈
      screenListeners={{
        tabPress: async (e) => {
          await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        },
      }}
    >
      <Tab.Screen
        name={"IngredientsHome"}
        component={IngredientsHome}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <View className={"items-center mt-5"}>
                <Icon
                  as={Refrigerator}
                  className={`${focused ? "text-primary-500" : "text-secondary-800"}`}
                ></Icon>
                <Text
                  className={`font-bold ${focused ? "text-primary-500" : "text-secondary-800"}`}
                  size={"sm"}
                >
                  库存
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name={"publish"}
        component={Publish}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <View
                className={
                  "bg-amber-600 h-[40px] w-[40px] flex justify-center items-center mt-6 rounded-xl"
                }
              >
                <Icon as={Plus} color={"white"} size={"xl2"}></Icon>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name={"userSetting"}
        component={UserSetting}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <View className={"items-center mt-5"}>
                <Icon
                  as={User}
                  className={`${focused ? "text-primary-500" : "text-secondary-800"}`}
                ></Icon>
                <Text
                  className={`font-bold ${focused ? "text-primary-500" : "text-secondary-800"}`}
                  size={"sm"}
                >
                  我的
                </Text>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export { UserNavigation };
