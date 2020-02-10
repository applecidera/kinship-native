import React, {useState} from 'react';
// {useState} is react hook that allows you to use state in functional components
import { StyleSheet, Text, View, Button } from 'react-native';
// stylesheet allows to use css like style properties
// view is component like a <div>
// text is component like <p>
// button is buit in component, needs to be capital and self closing

export default function App() {

  const [outputText, setOutputText] = useState('Hello World!!!')

  return (
    <View style={styles.container}>
      <Text>hello world...</Text>
      <Button />
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
