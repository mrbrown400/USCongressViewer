import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Button } from 'react-native';
import axios from 'axios';

const HouseScreen = ({ navigation }) => {
  const [members, setMembers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get('https://www.govtrack.us/api/v2/role?current=true&role_type=representative')
      .then(response => {
        setMembers(response.data.objects);
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
          title="Go to Senate"
          onPress={() => navigation.navigate('Senate')}
          color="#007BFF" // You can change the color as needed
        />
      </View>
      <ScrollView style={styles.scrollView}>
        {members.map(member => (
          <View key={member.person.id} style={styles.memberContainer}>
            <Text style={styles.memberName}>{member.person.name}</Text>
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

export default HouseScreen;
