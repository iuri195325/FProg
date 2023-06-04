import {
  Image,
  TouchableOpacity,
  View,
  TouchableOpacityProps,
} from "react-native";
import { Fontisto, AntDesign } from "@expo/vector-icons";
import { RowIcons } from "./RowIcons/RowIcons";
import { CourseTitle } from "./CourseTitle/CourseTitle";
import { styles } from "./styles";

type CourseCardProps = {
  imageUrl: string;
  title: string;
  horas: string;
  aulas: string;
} & TouchableOpacityProps;

export const CourseCard = ({
  aulas,
  horas,
  imageUrl,
  title,
  ...props
}: CourseCardProps) => {
  return (
    <TouchableOpacity {...props} style={styles.CourseCard}>
      <Image
        style={styles.Image}
        source={{
          uri: imageUrl,
        }}
      />
      <View style={{ padding: 8 }}>
        <View style={{ marginBottom: 20 }}>
          <CourseTitle title={title} />
        </View>
        <View style={{ flexDirection: "row" }}>
          <RowIcons
            title={aulas}
            icon={
              <Fontisto
                style={{ marginRight: 10 }}
                name="film"
                size={15}
                color="#032E6F"
              />
            }
          />
          <RowIcons
            title={horas}
            icon={
              <AntDesign
                style={{ marginRight: 10 }}
                name="clockcircle"
                size={15}
                color="#032E6F"
              />
            }
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};
