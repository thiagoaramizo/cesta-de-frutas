import { StatusBar, SafeAreaView, View, StyleSheet, Text } from 'react-native';
import AppLoading from 'expo-app-loading';
import Cesta from './src/telas/Cesta';
import mock from './src/mocks/cesta'

export default function App() {
  return (
    <View style={styles.app}>
      <SafeAreaView>
        <View style={styles.container}>
          <StatusBar />
          <Cesta { ...mock}/>
        </View>
        <View style={styles.menu}>
            <Text style={styles.menuItem}>Menu 1</Text>
            <Text style={styles.menuItem}>Menu 2</Text>
            <Text style={styles.menuItem}>Menu 3</Text>
            <Text style={styles.menuItem}>Menu 4</Text>
        </View>
      </SafeAreaView>
      
    </View>
    
  );
}

const styles = StyleSheet.create({
  app: {
      backgroundColor: "rgb(234,29,44)",
      flex: 1
  },
  container: {
    position: "relative",
    marginBottom: 60,
  },
  menu: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    backgroundColor: "#f3f3f3",
    width: "100%",
  },
  menuItem: {
    width: "25%",
    textAlign: "center",
    paddingTop: 30,
    paddingBottom: 60,
  }
})