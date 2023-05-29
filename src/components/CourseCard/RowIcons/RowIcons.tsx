import { ReactNode } from "react";
import { Text, View } from "react-native";

type RowIconsProps = {
    icon?: ReactNode
    title: string
}

export const RowIcons = ({icon, title}: RowIconsProps) => {
  return (
    <View style={{ flexDirection: "row", marginRight: 20 }}>
      {icon && icon}
      <Text style={{ fontWeight: "700" }}>{title}</Text>
    </View>
  );
};
