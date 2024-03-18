import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Header />
      </View>
      <View style={styles.content}>{children}</View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  content: {
    flex: 1,
  },
  header:{
    marginBottom: 20,
  }
});

export default MainLayout;
