import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { TypeCourseButton } from "../../components/TypeCourseButton/TypeCourseButton";
import { FlatList } from "react-native";
import { TypeCourse } from "../../constants/TypeCourse";
import { CourseCard } from "../../components/CourseCard/CourseCard";
import { Course } from "../../constants/Courses";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { TextInput } from "react-native";

export const Home = () => {
  const [filterByType, setFilterByType] = useState<string>();
  const [search, setSearch] = useState<boolean>(false);

  return (
    <SafeAreaView style={{ backgroundColor: "#2B3A70", height: "100%" }}>
      <View style={{ padding: 12 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#fff", fontSize: 36, fontWeight: "700" }}>
            Curso
          </Text>
          <TouchableOpacity onPress={() => setSearch(!search)}>
            {search ? (
              <MaterialIcons name="search-off" size={30} color="#fff" />
            ) : (
              <FontAwesome name="search" size={24} color="#fff" />
            )}
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            horizontal
            style={{ marginTop: 10, marginBottom: 30 }}
            data={TypeCourse}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <TypeCourseButton
                onPress={() =>
                  filterByType
                    ? setFilterByType("")
                    : setFilterByType(item.name)
                }
                name={item.name}
                presed={
                  filterByType && item.name === filterByType ? true : false
                }
              />
            )}
          />
        </View>
        <View
          style={{
            paddingLeft: 10,
            paddingRight: 10,
            marginBottom: 20,
          }}
        >
          {search && (
            <TextInput
              placeholder="Digite o nome do curso..."
              style={{
                backgroundColor: "#fff",
                paddingLeft: 10,
                paddingRight: 10,
                borderRadius: 10,
                height: 40,
              }}
            />
          )}
        </View>
        <View>
          <FlatList
            style={{ paddingLeft: 10, paddingRight: 10 }}
            data={Course}
            renderItem={({ item }) => {
              if (filterByType) {
                if (item.tipo !== filterByType) return <View />;
                return (
                  <CourseCard
                    title={item.title}
                    aulas={item.aulas}
                    horas={item.horas}
                    imageUrl={item.imageUrl}
                  />
                );
              } else {
                return (
                  <CourseCard
                    title={item.title}
                    aulas={item.aulas}
                    horas={item.horas}
                    imageUrl={item.imageUrl}
                  />
                );
              }
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
