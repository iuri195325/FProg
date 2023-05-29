import { Text, TextProps } from "react-native";

type CourseProps = {
    title: string
} & TextProps

export const CourseTitle = ({title, ...props}: CourseProps) => {
  return (
    <Text {...props} style={{ fontSize: 18, color: "#032E6F", fontWeight: "900" }}>
      {title}
    </Text>
  );
};
