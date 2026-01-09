import { View, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button title="Go to Camera" onPress={() => navigation.navigate('Camera')} />
      <Button title="Go to Location" onPress={() => navigation.navigate('Location')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
    justifyContent: 'center',
    padding: 20,
  },
});