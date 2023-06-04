import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { useState, ReactNode } from "react";
import { Checkbox } from "react-native-paper";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

type AulasTypes = {
  title: string;
  isWatched?: boolean;
  button?: ReactNode;
} & TouchableOpacityProps;

export const AulasItem = ({
  title,
  isWatched = false,
  ...props
}: AulasTypes) => {
  const [isChecked, setIsChecked] = useState<boolean>(isWatched);
  return (
    <TouchableOpacity
      {...props}
      style={{
        width: "100%",
        borderRadius: 10,
        backgroundColor: "#fff",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
      }}
    >
      <View
        style={{
          width: "75%",
          flexDirection: "row",
          marginLeft: 10,
          alignItems: "center",
          flexWrap: "nowrap",
        }}
      >
        <AntDesign
          name="play"
          size={24}
          color="red"
          style={{ marginRight: 10 }}
        />
        <Text style={{ color: "#000", fontWeight: "700", fontSize: 13 }}>
          {title}
        </Text>
      </View>
      <View>
        <Checkbox.Item
          onPress={() => setIsChecked(!isChecked)}
          label=""
          color="green"
          status={isChecked ? "checked" : "unchecked"}
        />
      </View>
    </TouchableOpacity>
  );
};
