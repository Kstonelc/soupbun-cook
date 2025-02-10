import React from "react";
import appHelper from "../AppHelper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import _example from "../_example";

import { UserNavigation } from "./User";
const RootNavigation = ({ route }) => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <NavigationWrapper />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const Stack = createNativeStackNavigator();
const NavigationWrapper = ({ route }) => {
  appHelper.useInsets();
  appHelper.useNavigation();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        detachPreviousScreen: false,
        gestureEnabled: false,
      }}
      initialRouteName={"UserNavigation"}
    >
      <Stack.Group key={"公共模块"}>
        <Stack.Screen name={"_example"} component={_example} />
      </Stack.Group>
      <Stack.Group key={"用户功能"}>
        <Stack.Screen name={"UserNavigation"} component={UserNavigation} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
export { RootNavigation };
