import { Text, SafeAreaView, ActivityIndicator } from "react-native";

const Loading = ({ text }) => {
  return (
    <SafeAreaView className=" flex-1 justify-center items-center gap-2 ">
      <ActivityIndicator size="large" />
      <Text className=" text-lg">{text}</Text>
    </SafeAreaView>
  );
};

export default Loading;
