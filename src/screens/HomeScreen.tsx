import React from 'react';
import { Button, Text, StyleSheet, View } from 'react-native';
import MainLayout from '../layouts/MainLayout';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';

interface HomeScreenProps {
  tasks: { id: number; text: string; completed: boolean }[];
  addTask: (newTaskText: string) => void;
  navigation: any; 
}

const HomeScreen: React.FC<HomeScreenProps> = ({ tasks, addTask, navigation }) => {
  const goToAbout = () => {
    navigation.navigate('About');
  };

  return (
    <MainLayout>
      <Text style={styles.title}>Home Screen</Text>
      <ToDoList tasks={tasks} />
      <ToDoForm addTask={addTask} style={styles.form} />
      <View style={styles.buttonContainer}>
        <Button title="Go to About" onPress={goToAbout} />
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  form: {
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
});

export default HomeScreen;
