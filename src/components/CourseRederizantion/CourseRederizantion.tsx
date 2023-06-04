import { Text, View, FlatList } from "react-native";
import { CourseCard } from "../CourseCard/CourseCard";
import { useNavigation } from "@react-navigation/native";
import { CourseTypes } from "../../constants/Courses";
import { ReactNode } from "react";

type CourseRederizantionProps = {
  course: CourseTypes[];
  title: string;
  tipo: string;
  icon?: ReactNode;
};

export const CourseRederizantion = ({
  course,
  title,
  tipo,
  icon,
}: CourseRederizantionProps) => {
  const { navigate } = useNavigation();
  return (
    <View>
      <View style={{ flexDirection: "row", alignItems: "baseline" }}>
        {icon && icon}
        <Text
          style={{
            fontSize: 18,
            color: "#fff",
            fontWeight: "600",
            marginLeft: 10,
            marginBottom: 10,
          }}
        >
          {title}
        </Text>
      </View>
      <FlatList
        horizontal
        style={{ paddingLeft: 10, paddingRight: 10 }}
        data={course}
        renderItem={({ item }) => {
          if (tipo !== item.tipo) return <View />;
          return (
            <CourseCard
              onPress={() => navigate("Aulas", { data: item })}
              title={item.title}
              aulas={item.aulas}
              horas={item.horas}
              imageUrl={item.imageUrl}
            />
          );
        }}
      />
      <View
        style={{
          width: "100%",
          borderWidth: 1,
          borderColor: "#fff",
          backgroundColor: "#fff",
          marginBottom: 40,
        }}
      />
    </View>
  );
};
