import React, {useState} from 'react';
// {useState} is react hook that allows you to use state in functional components
import { StyleSheet, Text, View, Button } from 'react-native';
// StyleSheet allows to use css like style properties
// View is component like a <div>
// Text is component like <p>
// Button is buit in component, needs to be capital and self closing
// Button uses onPress instead of onClick

export default function App() {

  const [outputText, setOutputText] = useState('hello world...')

  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button title="Click Me!" onPress={()=>setOutputText('Hello World!!!')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
