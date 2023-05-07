import React from "react";
import { Button, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";

const Detail = ({ route }) => {
  const {task} = route.params;
  return (
    <View>
      <Text>{task.taskName}</Text>
      <Text>{task.taskDetails}</Text>

    </View>
  );
};

export default Detail;
