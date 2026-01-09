import { View, Text, Button, Alert, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import * as Notifications from 'expo-notifications';
import { useState } from 'react';

export default function LocationScreen() {
  const [coords, setCoords] = useState(null);

  const getLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Location permission required');
      return;
    }
    const location = await Location.getCurrentPositionAsync({});
    setCoords(location.coords);

    await Notifications.requestPermissionsAsync();
    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Location Retrieved',
        body: 'Your GPS location was successfully fetched.',
      },
      trigger: null,
    });
  };

  return (
    <View style={styles.container}>
      <Button title="Get My Location" onPress={getLocation} />
      {coords && (
        <Text style={styles.text}>
          Lat: {coords.latitude} {"\n"}
          Lng: {coords.longitude}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
    padding: 20,
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
});