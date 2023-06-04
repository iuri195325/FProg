import { CourseTypes } from "../constants/Courses";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/Home/Home";
import { Aulas } from "../screens/Home/Aulas";

type RootStackParamList = {
  Home: undefined;
  Aulas: { data: CourseTypes };
};

const Stack = createStackNavigator<RootStackParamList>();

export const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Aulas" component={Aulas} />
  </Stack.Navigator>
  );
};
