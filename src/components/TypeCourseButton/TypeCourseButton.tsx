import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

export type TypeCourseButtonProps = {
  name: string;
  presed?: boolean
} & TouchableOpacityProps;

export const TypeCourseButton = ({ name, presed, ...props }: TypeCourseButtonProps) => {
  return (
    <TouchableOpacity
      {...props}
      style={{ backgroundColor: presed ? "#F47575" : "#7591F4", borderRadius: 10, width: 110, height: 30, flexDirection: 'row', justifyContent:'center', alignItems: 'center', margin: 5}}
    >
      <Text style={{ color: "#fff", fontSize: 12, fontWeight: "bold" }}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};
