import { Home } from "../screens/Home/Home";
import { Profile } from "../screens/Profile/Profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Config } from "../screens/config/config";
import {
  MaterialCommunityIcons,
  Ionicons,
  AntDesign,
} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export const Navigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarStyle: { backgroundColor: '#f1f1f1' },  }}
      initialRouteName="Home"
    >
      <Tab.Screen
        name="Config"
        component={Config}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign name="piechart" size={24} color={focused ? "#7591F4" : "black"} />
          ),
        }}
      />
      <Tab.Screen
        name="Cursos"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="certificate-outline"
              size={30}
              color={focused ? "#7591F4" : "black" }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name="person-circle" size={30} color={focused ? "#7591F4" : "black"} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
