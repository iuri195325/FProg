import React, { useState } from "react";
import { Text, View, FlatList, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeft } from "../../components/ArrowLeft/ArrowLeft";
import { AulasItem } from "../../components/Aulas/Aulas";
import YoutubePlayer from "react-native-youtube-iframe";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

export const Aulas = () => {
  const route = useRoute();
  const values = route?.params?.data;
  const [videoTitle, setVideoTitle] = useState<string>("");
  const [videoId, setVideoId] = useState<string>("");
  const { goBack } = useNavigation();

  console.log(values);

  return (
    <SafeAreaView style={{ backgroundColor: "#2B3A70", flex: 1 }}>
      <ScrollView>
        <View>
          <ArrowLeft onPress={() => goBack()} style={{ margin: 20 }} />
          <View>
            <YoutubePlayer
              height={230}
              videoId={videoId ? videoId : values.videos[0].code}
              play
            />
            <View style={{ padding: 10 }}>
              <Text
                style={{
                  color: "#fff",
                  fontWeight: "500",
                  marginBottom: 20,
                  fontSize: 16,
                }}
              >
                {videoTitle ? videoTitle : values.videos[0].title}
              </Text>
              <View
                style={{
                  width: "100%",
                  borderWidth: 1,
                  borderColor: "#fff",
                  backgroundColor: "#fff",
                  marginBottom: 50,
                }}
              />
              <FlatList
                data={values.videos}
                contentContainerStyle={{ height: "100%" }}
                renderItem={({ item }) => {
                  return (
                    <AulasItem
                      title={item.title}
                      onPress={() => {
                        setVideoTitle(item.title);
                        setVideoId(item.code);
                      }}
                    />
                  );
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
