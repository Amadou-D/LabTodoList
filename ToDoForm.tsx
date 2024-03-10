import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

interface ToDoFormProps {
  addTask: (newTaskText: string) => void;
}

const ToDoForm: React.FC<ToDoFormProps> = ({ addTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      addTask(newTask);
      setNewTask('');
    }
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        value={newTask}
        onChangeText={setNewTask}
      />
      <Button title="Add" onPress={handleAddTask}>
        <Text>Add</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
});

export default ToDoForm;
