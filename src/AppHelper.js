import {
  CommonActions,
  useNavigation,
  useFocusEffect,
} from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useWindowDimensions } from "react-native";

class AppHelper {
  insets;
  _navigation;
  constructor() {}

  //region 导航
  useNavigation() {
    this._navigation = useNavigation();
  }

  navigateBack() {
    if (this._navigation) {
      this._navigation.goBack();
    }
  }
  //endregion

  //region 主题和界面

  useInsets() {
    this.insets = useSafeAreaInsets();
  }

  useWindow() {
    this.window = useWindowDimensions();
  }

  //endregion

  //region日志
  info(value) {
    console.log(value);
  }
  //endregion
}

export default new AppHelper();
