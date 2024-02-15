import React from 'react';
import { ScrollView, Pressable, View, Text, StyleSheet } from 'react-native';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface ToDoListProps {
  tasks: Task[];
}

const ToDoList: React.FC<ToDoListProps> = ({ tasks }) => {
  const toggleTaskCompletion = (taskId: number) => {
    console.log('Toggle completion for Task ID:', taskId);
  };

  return (
    <ScrollView>
      {tasks.map((task) => (
        <Pressable key={task.id} onPress={() => toggleTaskCompletion(task.id)}>
          <View style={[styles.task, task.completed && styles.completed]}>
            <Text style={styles.taskText}>{task.text}</Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 16,
  },
});

export default ToDoList;
