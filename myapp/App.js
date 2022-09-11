// import { NativeRouter, Route, Routes } from "react-router-native";
import Home from "./src/view/Home";
import Login from "./src/view/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>

    // <NativeRouter>
    //   <Routes>
    //     <Route>
    //       <Route path="/" element={<Home />} />
    //     </Route>
    //   </Routes>
    // </NativeRouter>
  );
}
