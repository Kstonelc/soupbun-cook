import { Screen, Box, Text, View } from "@/src/components";
import { Button, ButtonText } from "@/components/ui/button";
import { Input, InputField } from "@/components/ui/input";
import {
  FormControl,
  FormControlError,
  FormControlErrorText,
  FormControlErrorIcon,
  FormControlLabel,
  FormControlLabelText,
  FormControlHelper,
  FormControlHelperText,
} from "@/components/ui/form-control";
import { useState } from "react";

const UserLogin = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <Screen>
      <Box>
        <View className={"mx-10"}>
          <FormControl
            isInvalid={false}
            size="lg"
            isDisabled={false}
            isReadOnly={true}
            isRequired={true}
          >
            <FormControlLabel>
              <FormControlLabelText>手机号</FormControlLabelText>
            </FormControlLabel>
            <Input className="my-1" size={"md"}>
              <InputField
                type="password"
                placeholder="请输入验证码"
                value={inputValue}
                onChangeText={(text) => setInputValue(text)}
              />
            </Input>
            <FormControlHelper>
              {/*<FormControlHelperText>*/}
              {/*  Must be atleast 6 characters.*/}
              {/*</FormControlHelperText>*/}
            </FormControlHelper>
            <FormControlError>
              {/*<FormControlErrorIcon as={AlertCircleIcon} />*/}
              {/*<FormControlErrorText>*/}
              {/*  Atleast 6 characters are required.*/}
              {/*</FormControlErrorText>*/}
            </FormControlError>
          </FormControl>
          <FormControl
            className={"mb-4"}
            isInvalid={false}
            size="lg"
            isDisabled={false}
            isReadOnly={true}
            isRequired={true}
          >
            <FormControlLabel>
              <FormControlLabelText>验证码</FormControlLabelText>
            </FormControlLabel>
            <Input className="my-1" size={"md"}>
              <InputField
                type="password"
                placeholder="请输入验证码"
                value={inputValue}
                onChangeText={(text) => setInputValue(text)}
              />
            </Input>
            <FormControlHelper>
              {/*<FormControlHelperText>*/}
              {/*  Must be atleast 6 characters.*/}
              {/*</FormControlHelperText>*/}
            </FormControlHelper>
            <FormControlError>
              {/*<FormControlErrorIcon as={AlertCircleIcon} />*/}
              {/*<FormControlErrorText>*/}
              {/*  Atleast 6 characters are required.*/}
              {/*</FormControlErrorText>*/}
            </FormControlError>
          </FormControl>
          <Button className={"rounded-xl"}>
            <ButtonText>登录</ButtonText>
          </Button>
        </View>
      </Box>
    </Screen>
  );
};

export { UserLogin };
