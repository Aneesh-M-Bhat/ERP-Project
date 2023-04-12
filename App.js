const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Splash from "./screens/Splash";
import Dashboard from "./screens/Dashboard";
import Support from "./screens/Support";
import FeedsDetails from "./screens/FeedsDetails";
import Events from "./screens/Events";
import ChangePassword from "./screens/ChangePassword";
import LeaveApplication from "./screens/LeaveApplication";
import SchoolGallery from "./screens/SchoolGallery";
import AskDoubts from "./screens/AskDoubts";
import DateSheet from "./screens/DateSheet";
import Result from "./screens/Result";
import Timetable from "./screens/Timetable";
import Assignment from "./screens/Assignment";
import Quiz from "./screens/Quiz";
import PayOnline from "./screens/PayOnline";
import Fees from "./screens/Fees";
import Holiday from "./screens/Holiday";
import Attendance from "./screens/Attendance";
import Profile from "./screens/Profile";
import LoginV2 from "./screens/LoginV2";
import Login from "./screens/Login";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    Roboto_regular: require("./assets/fonts/Roboto_regular.ttf"),
    "Open Sans_regular": require("./assets/fonts/Open_Sans_regular.ttf"),
    "Open Sans_semibold": require("./assets/fonts/Open_Sans_semibold.ttf"),
    "Open Sans_bold": require("./assets/fonts/Open_Sans_bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {/* <Stack.Screen
              name="Splash"
              component={Splash}
              options={{ headerShown: false }}
            /> */}
            {/* <Stack.Screen
              name="Dashboard"
              component={Dashboard}
              options={{ headerShown: false }}
            /> */}
            {/* <Stack.Screen
              name="Support"
              component={Support}
              options={{ headerShown: false }}
            /> */}
            {/* <Stack.Screen
              name="FeedsDetails"
              component={FeedsDetails}
              options={{ headerShown: false }}
            /> */}
            {/* <Stack.Screen
              name="Events"
              component={Events}
              options={{ headerShown: false }}
            /> */}
            {/* <Stack.Screen
              name="ChangePassword"
              component={ChangePassword}
              options={{ headerShown: false }}
            /> */}
            {/* <Stack.Screen
              name="LeaveApplication"
              component={LeaveApplication}
              options={{ headerShown: false }}
            /> */}
            {/* <Stack.Screen
              name="SchoolGallery"
              component={SchoolGallery}
              options={{ headerShown: false }}
            /> */}
            {/* <Stack.Screen
              name="AskDoubts"
              component={AskDoubts}
              options={{ headerShown: false }}
            /> */}
            {/* <Stack.Screen
              name="DateSheet"
              component={DateSheet}
              options={{ headerShown: false }}
            /> */}
            {/* <Stack.Screen
              name="Result"
              component={Result}
              options={{ headerShown: false }}
            /> */}
            {/* <Stack.Screen
              name="Timetable"
              component={Timetable}
              options={{ headerShown: false }}
            /> */}
            {/* <Stack.Screen
              name="Assignment"
              component={Assignment}
              options={{ headerShown: false }}
            /> */}
            {/* <Stack.Screen
              name="Quiz"
              component={Quiz}
              options={{ headerShown: false }}
            /> */}
            {/* <Stack.Screen
              name="PayOnline"
              component={PayOnline}
              options={{ headerShown: false }}
            /> */}
            {/* <Stack.Screen
              name="Fees"
              component={Fees}
              options={{ headerShown: false }}
            /> */}
            {/* <Stack.Screen
              name="Holiday"
              component={Holiday}
              options={{ headerShown: false }}
            /> */}
            {/* <Stack.Screen
              name="Attendance"
              component={Attendance}
              options={{ headerShown: false }}
            /> */}
            {/* <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            /> */}
            <Stack.Screen
              name="LoginV2"
              component={LoginV2}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
