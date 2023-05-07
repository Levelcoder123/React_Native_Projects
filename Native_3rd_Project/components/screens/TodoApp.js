import React from "react";
import { useState } from "react";
import { View, Text, TextInput, Button, FlatList } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const TodoApp = ({ navigation }) => {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [taskDetails, setTaskDetails] = useState("");

  const addTask = () => {
    setTasks([...tasks, { taskName, taskDetails }]);
    setTaskName("");
    setTaskDetails("");
  };
  return (
    <View>
      <TextInput
        placeholder="Task Name"
        onChangeText={(text) => setTaskName(text)}
      />
      <TextInput
        placeholder="Task Details"
        onChangeText={(text) => setTaskDetails(text)}
      />

      <Button
        title="Add Task"
        onPress={() => addTask({ taskName, taskDetails })}
      />

      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <Text onPress={() => navigation.navigate("Detail", { task: item })}>
            {item.taskName}
          </Text>
        )}
      />
    </View>
  );
};

export default TodoApp;
