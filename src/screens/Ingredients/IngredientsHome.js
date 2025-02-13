import * as React from "react";
import { View, Text, Screen, Box, Pressable } from "@/src/components";
import { useWindowDimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

const FirstRoute = () => {
  return (
    <View>
      <Text>1111</Text>
    </View>
  );
};

const SecondRoute = () => {
  return (
    <View>
      <Text>2222</Text>
    </View>
  );
};

const ThirdRoute = () => {
  return (
    <View>
      <Text>333</Text>
    </View>
  );
};

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
});

const routes = [
  { key: "first", title: "First1" },
  { key: "second", title: "Second" },
  { key: "third", title: "Third" },
];

const IngredientsHome = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);

  const renderBar = (props) => {
    return (
      <TabBar
        {...props}
        tabStyle={{
          width: 100,
        }}
        indicatorStyle={{
          backgroundColor: "#D97706",
          height: 4,
          borderRadius: 4,
        }}
        renderTabBarItem={({ route, key }) => {
          const nextIndex = routes.findIndex((item) => item.key === key);
          return (
            <Pressable
              onPress={() => {
                setIndex(nextIndex);
              }}
              className={"w-[100px] flex justify-center items-center h-[40px]"}
            >
              <Text size={"md"} bold={true}>
                {route.title}
              </Text>
            </Pressable>
          );
        }}
      />
    );
  };

  return (
    <Screen>
      <Box>
        <TabView
          renderTabBar={renderBar}
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
        />
      </Box>
    </Screen>
  );
};

export { IngredientsHome };
