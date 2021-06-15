import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
<View style={styles.container}>
    <Text style={styles.header}>
    Quiz 1
    </Text>
    <View style={styles.rowcontainer}>
        <Text>
           Write the JSX code for this app!
        </Text>
        <Text>
          These three buttons are red, green, and blue
        </Text>
    </View>
    <View style={styles.rowContainer}>
        <Button color='red' title='A'/>
        <Button color='green' title='B'/>
        <Button color='blue' title='C'/>
    </View>
    <Text style={styles.redText}>
        The header fontSize is 40.
    </Text>
    <Text>
        Use a StyleSheet for all styles.
    </Text>
    <Text>
        Set the button colors with the color Prop
    </Text>
</View>
    );
  }
const styles = StyleSheet.create ({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  redText:{
    color:'red'
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  header:{
    fontSize:40,
    color:'blue',
  },
});
