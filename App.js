import React, {useState} from 'react';
// {useState} is react hook that allows you to use state in functional components
import { StyleSheet, Text, View, Button } from 'react-native';
// StyleSheet allows to use css like style properties
// View is component like a <div>
// Text is component like <p>
// Button is buit in component, needs to be capital and self closing
// Button uses onPress instead of onClick
// Touchable
// Image
// TextInput
// ScrollView
// Picker
// Slider
// Switch
import CreateFriend from './components/create_friend/create_friend'
import Index from './components/index/index'
import { View, Text, Button } from 'react-native'

export default function App() {

  const [isAddMode, setIsAddMode] = useState(false);

  return (
    <View style={styles.container}>
      <Modal>
        <CreateFriend />
      </Modal>
      <Index />
    </View>
  );
}

// stylesheet objects are used in lieu of css
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
