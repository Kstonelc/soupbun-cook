import * as React from "react";
import { Icon } from "@/components/ui/icon";
import { AlertCircle, Sparkles } from "lucide-react-native";
import { View, Text, Screen, Box, Pressable, Image } from "@/src/components";
import { useWindowDimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

const FirstRoute = () => {
  return (
    <View className={"flex flex-row mt-4 gap-2"}>
      <View
        className={
          "flex flex-1 flex-row justify-between p-4 bg-background-0 rounded-xl"
        }
      >
        <View>
          <Text size={"lg"} bold={true} className={"mb-1"}>
            青菜
          </Text>
          <Text className={"mb-1"}>150g</Text>
          <View className={"flex flex-row items-center"}>
            <Icon
              as={AlertCircle}
              size={"sm"}
              className={"mr-1"}
              color={"red"}
            ></Icon>
            <Text size={"sm"}>还有3天过期</Text>
          </View>
        </View>
        <View className={"h-[40px] w-[40px]"}>
          <Image
            file={
              "https://soupbun-1301440964.cos.ap-shanghai.myqcloud.com/ingredients/greens.svg"
            }
          ></Image>
        </View>
      </View>
      <View
        className={
          "flex flex-1 flex-row justify-between p-4 bg-background-0 rounded-xl"
        }
      >
        <View>
          <Text size={"lg"} bold={true} className={"mb-1"}>
            肉丝
          </Text>
          <Text className={"mb-1"}>150g</Text>
          <View className={"flex flex-row items-center"}>
            <Icon
              as={Sparkles}
              size={"sm"}
              className={"mr-1 text-amber-400"}
            ></Icon>
            <Text size={"sm"}>新鲜</Text>
          </View>
        </View>
        <View className={"h-[40px] w-[40px]"}>
          <Image
            file={
              "https://soupbun-1301440964.cos.ap-shanghai.myqcloud.com/ingredients/shredded%20meat.svg"
            }
          ></Image>
        </View>
      </View>
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
  { key: "first", title: "全部" },
  { key: "second", title: "蔬菜" },
  { key: "third", title: "肉类" },
];

const IngredientsHome = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);

  const renderBar = (props) => {
    return (
      <TabBar
        {...props}
        tabStyle={{
          width: 70,
        }}
        indicatorStyle={{
          backgroundColor: "#D97706",
          height: 3,
          borderRadius: 3,
        }}
        renderTabBarItem={({ route, key }) => {
          const nextIndex = routes.findIndex((item) => item.key === key);
          const isActive = index === nextIndex;
          return (
            <Pressable
              onPress={() => {
                setIndex(nextIndex);
              }}
              className={"w-[70px] flex justify-center items-center h-[40px]"}
            >
              <Text
                size={isActive ? "xl" : "lg"}
                bold={true}
                className={isActive ? null : "text-background-500"}
              >
                {route.title}
              </Text>
            </Pressable>
          );
        }}
        style={{
          backgroundColor: "#FFFFF",
        }}
      />
    );
  };

  return (
    <Screen>
      <Box>
        <View className={"mb-2"}>
          <Text size={"2xl"} bold={true}>
            库存
          </Text>
        </View>
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
