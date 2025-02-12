import React, { useEffect, useRef } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Path, G, Defs, ClipPath, Rect, Svg } from "react-native-svg";
import * as Haptics from "expo-haptics";
import _example from "@/src/_example";
import { Icon, createIcon } from "@/components/ui/icon";
import { Box, View, Text } from "@/src/components";

import { UserSetting } from "../User/UserSetting";
import Publish from "../Publish";
import { User, House } from "lucide-react-native";

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

  const PublishIcon = createIcon({
    viewBox: "0 0 1024 1024",
    defaultProps: {
      height: 384,
      width: 384,
    },
    path: (
      <Path
        d="M930.9184 0C982.3232 0 1024 41.6768 1024 93.0816v837.8368A93.0816 93.0816 0 0 1 930.9184 1024H93.0816A93.0816 93.0816 0 0 1 0 930.9184V93.0816C0 41.6768 41.6768 0 93.0816 0h837.8368z m-403.6608 251.392a34.9184 34.9184 0 0 0-34.9184 34.9184L492.288 476.16H302.5408a34.9184 34.9184 0 0 0-34.5088 29.7472l-0.4096 5.12c0 19.3536 15.6672 34.9696 34.9184 34.9696l189.7472-0.0512v189.7984c0 17.5616 12.9536 32.0512 29.7984 34.56l5.12 0.3584a34.9184 34.9184 0 0 0 34.9184-34.9184v-189.7984h189.7984a34.9184 34.9184 0 0 0 34.56-29.696l0.3584-5.1712a34.9184 34.9184 0 0 0-34.9184-34.9184H562.176V286.3104a34.9184 34.9184 0 0 0-29.696-34.5088z"
        fill="#e0620d"
      />
    ),
  });

  //endregion

  return (
    <Tab.Navigator
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
      // 设置震动反馈
      screenListeners={{
        tabPress: async (e) => {
          await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        },
      }}
    >
      <Tab.Screen
        name={"_example"}
        component={_example}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <View className={"items-center mt-5"}>
                <Icon
                  as={House}
                  className={`${focused ? "text-primary-500" : "text-secondary-800"}`}
                ></Icon>
                <Text
                  className={`font-bold ${focused ? "text-primary-500" : "text-secondary-800"}`}
                  size={"sm"}
                >
                  主页
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
              <Icon
                as={PublishIcon}
                size={"60px"}
                className="text-typography-black mt-5"
              />
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
