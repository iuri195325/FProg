import { Text } from "react-native";

type CourseTitleType = {
  title: string;
};

export const CourseTitle = ({ title }: CourseTitleType) => {
  return (
    <Text allowFontScaling={false} style={{ color: "#fff", fontSize: 36, fontWeight: "700" }}>
      {title}
    </Text>
  );
};
