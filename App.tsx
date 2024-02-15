import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Button } from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: 'Do laundry', completed: true },
    { id: 2, text: 'Go to gym', completed: false },
    { id: 3, text: 'Walk dog', completed: true },
  ]);

  const addTask = (newTaskText: string) => {
    const newTask: Task = {
      id: tasks.length + 1,
      text: newTaskText,
      completed: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <SafeAreaView>
      <ToDoList tasks={tasks} />
      <ToDoForm onAddTask={addTask} />
    </SafeAreaView>
  );
};

export default App;
