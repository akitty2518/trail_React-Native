import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Alert,
  TextInput,
} from 'react-native';
import {Box, Button} from '@react-native-material/core';
import data from '../iFlow_Prod/src/Json/data.json';

const App = () => {
  const [input, setInput] = useState({});

  const handleInputChange = (field: string, value: string) => {
    setInput(prevInput => ({
      ...prevInput,
      [field]: value,
    }));
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          margin: 5,
          color: '#00008b',
          alignSelf: 'center',
          fontWeight: 'bold',
          fontSize: 20,
        }}>
        {data.heading}
      </Text>
      <Text style={styles.basic}>{data.basicDetals.title}</Text>
      <ScrollView>
        {data.basicDetals.inputFields.map((item, index) => (
          <Box style={styles.box} key={index}>
            <Text style={styles.text}>{item}</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={text => handleInputChange(item, text)}
            />
          </Box>
        ))}
        <Text
          style={{
            color: 'black',
            padding: 10,
            fontSize: 17,
            fontWeight: 'bold',
          }}>
          Address
        </Text>
        {data.basicDetals.address.map((item, index) => (
          <Box style={styles.box} key={index}>
            <Text style={styles.text}>{item}</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={text => handleInputChange(item, text)}
            />
          </Box>
        ))}
        <View style={styles.fixToText}>
          <Button
            title="Cancel"
            color="blue"
            onPress={() => Alert.alert('Left button pressed')}
          />
          <Button
            title="Save"
            color="orange"
            onPress={() => {
              Alert.alert('Right button pressed');
              console.log(input);
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingTop: 10,
  },
  basic: {
    color: 'orange',
    margin: 20,
    fontSize: 20,
  },

  box: {
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 20,
  },

  textInput: {
    flex: 1,
    borderRadius: 20,
    borderWidth: 0.5,
    color: '#000',
    paddingLeft: 15,
  },
  text: {
    alignSelf: 'center',
    color: 'black',
    width: '30%',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
