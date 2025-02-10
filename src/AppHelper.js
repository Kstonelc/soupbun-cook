import {
  CommonActions,
  useNavigation,
  useFocusEffect,
} from "@react-navigation/native";

class AppHelper {
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
}

export default new AppHelper();
