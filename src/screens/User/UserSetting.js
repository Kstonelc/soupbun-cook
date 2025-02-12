import { Screen, Text, Box, Avatar, View, Badge } from "@/src/components";
import { Icon } from "@/components/ui/icon";
import { Mars, Heart, ChevronRight } from "lucide-react-native";

const UserSetting = () => {
  return (
    <Screen>
      <Box scroll={true}>
        <View className={"mb-4 bg-white rounded-xl p-6"}>
          <View>
            <View className={"flex flex-row justify-start mb-3"}>
              <Avatar size={"xl"}></Avatar>
              <View className={"flex justify-center ml-5"}>
                <View className={"flex flex-row"}>
                  <Text size={"lg"} bold={true} className={"mr-2"}>
                    Glass Bridge
                  </Text>
                  <Badge />
                </View>
                <Text size={"sm"}>汤包号: 1122334455</Text>
              </View>
            </View>
            <Text className={"mb-2"}>点击这里, 填写简介</Text>
          </View>
          <View className={"flex flex-row items-center gap-8"}>
            <View className={"flex items-center"}>
              <Text bold={true}>111</Text>
              <Text>关注</Text>
            </View>
            <View className={"flex items-center"}>
              <Text bold={true}>1</Text>
              <Text>粉丝</Text>
            </View>
          </View>
        </View>
        <View
          className={
            "flex flex-row justify-between items-center bg-typography-0 p-4 rounded-xl"
          }
        >
          <View className={"flex flex-row items-center rounded-xl"}>
            <Icon
              as={Heart}
              color={"red"}
              className={"mr-4"}
              size={"xl"}
            ></Icon>
            <Text bold={true} size={"lg"}>
              家庭
            </Text>
          </View>
          <Icon as={ChevronRight}></Icon>
        </View>
      </Box>
    </Screen>
  );
};
export { UserSetting };
