import { AntDesign } from "@expo/vector-icons";
import {TouchableOpacity, TouchableOpacityProps } from "react-native";

export const ArrowLeft = ({...props}: TouchableOpacityProps) => {
  return (
    <TouchableOpacity {...props}>
      <AntDesign
        name="arrowleft"
        size={30}
        color="#fff"
      />
    </TouchableOpacity>
  );
};
