import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RepDetails = ({ route }) => {
  // Extract data passed through the navigation route
  const { repName, repParty, repState } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Representative Details</Text>
      <Text>Name: {repName}</Text>
      <Text>Party: {repParty}</Text>
      <Text>State: {repState}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default RepDetails;
