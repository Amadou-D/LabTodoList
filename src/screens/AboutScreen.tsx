import React from 'react';
import { Button, Text, StyleSheet } from 'react-native';
import MainLayout from '../layouts/MainLayout';

interface AboutScreenProps {
  navigation: any; 
}

const AboutScreen: React.FC<AboutScreenProps> = ({ navigation }) => {
  return (
    <MainLayout>
      <Text style={styles.title}>About Screen</Text>
      <Text style={styles.description}>TodoList Lab, Amadou Diallo, {new Date().toDateString()}</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
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
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default AboutScreen;
