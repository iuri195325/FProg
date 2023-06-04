import { View, TouchableOpacity, ScrollView, FlatList } from "react-native";
import { ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Course } from "../../constants/Courses";
import { CourseTitle } from "../../components/CourseTitle/CourseTitle";
import { CourseRederizantion } from "../../components/CourseRederizantion/CourseRederizantion";
import { Ionicons, FontAwesome, Fontisto } from "@expo/vector-icons";

type CourseRederizantionDataType = {
  icon: ReactNode;
  tipo: string;
  title: string;
};

const CourseRederizantionData: CourseRederizantionDataType[] = [
  {
    icon: (
      <Ionicons
        name="desktop"
        size={24}
        color="#fff"
        style={{ marginLeft: 10 }}
      />
    ),
    tipo: "FRONT-END",
    title: "Cursos Front-End",
  },
  {
    icon: (
      <FontAwesome
        name="gears"
        size={24}
        color="#fff"
        style={{ marginLeft: 10 }}
      />
    ),
    tipo: "BACK-END",
    title: "Cursos Back-End",
  },
  {
    icon: (
      <Fontisto
        name="mobile"
        size={24}
        color="#fff"
        style={{ marginLeft: 10 }}
      />
    ),
    tipo: "MOBILE",
    title: "Cursos Mobile",
  },
];

export const Home = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#2B3A70", height: "100%" }}>
      <View style={{ padding: 12 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 40,
          }}
        >
          <CourseTitle title="Cursos" />
          <TouchableOpacity>
            <Ionicons name="person-circle-outline" size={35} color="#fff" />
          </TouchableOpacity>
        </View>
        <FlatList
          data={CourseRederizantionData}
          ListFooterComponent={<View style={{ paddingBottom: 20 }} />}
          renderItem={({ item }) => {
            return (
              <CourseRederizantion
                course={Course}
                icon={item.icon}
                title={item.title}
                tipo={item.tipo}
              />
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};
