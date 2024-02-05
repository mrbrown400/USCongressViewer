import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Button } from 'react-native';
import axios from 'axios';

const SenateScreen = ({ navigation }) => {
  const [senators, setSenators] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get('https://www.govtrack.us/api/v2/role?current=true&role_type=senator')
      .then(response => {
        setSenators(response.data.objects);
        setIsLoading(false);
      })
      .catch(error => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          title="Go to House"
          onPress={() => navigation.navigate('House')}
          color="#007BFF" // You can change the color as needed
        />
      </View>
      <ScrollView style={styles.scrollView}>
        {senators.map(senator => (
          <View key={senator.person.id} style={styles.memberContainer}>
            <Text style={styles.memberName}>{senator.person.name}</Text>
            {/* Display other relevant details */}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: '#fff',
  },
  buttonContainer: {
    alignItems: 'flex-end',
    padding: 10,
  },
  memberContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  memberName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  // Add more styles as needed
});

export default SenateScreen;
