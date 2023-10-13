import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import PostScreen from "../screens/PostScreen";
import { StatusBar } from "react-native";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "News" }}
        />
        <Stack.Screen
          name="PostScreen"
          component={PostScreen}
          options={{ title: "Post" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
