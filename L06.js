import * as React from 'react';
import {Button, Text, StyleSheet, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TimProfile from './components/TimProfile'

import CatScreen from './components/CatScreen'

import SpeedConverter0 from './components/SpeedConverter0'

import TipScreen from './components/TipScreen'

import CameraDemo from './components/CameraDemo'

import ToDoList from './components/ToDoList'

import APIkey from './components/APIkey'

import ListDemoScreen from './components/ListDemoScreen'




// Put all of your screens into MyStack
// They will all be loaded into the app but only
// one will be visible at a time!
const Stack = createStackNavigator();
const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Home" component={HomeScreen}
            options={{ title: 'Welcome CS153a students' }}/>

        <Stack.Screen name="TimProfile" component={TimProfile}
            options={{title: 'Tim Hickey'}}/>

        <Stack.Screen name="Profile" component={ProfileScreen} />

        <Stack.Screen name="CatScreen" component={CatScreen} />

        <Stack.Screen name="converter" component={SpeedConverter0} />

        <Stack.Screen name="tipscreen" component={TipScreen} />

        <Stack.Screen name="listscreen" component={ListDemoScreen} />

        <Stack.Screen name="todolist" component={ToDoList} />

        <Stack.Screen name="camerademo" component={CameraDemo} />

        <Stack.Screen name="apikey" component={APIkey} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Here is a homescreen with some navigation ...
const HomeScreen = ({ navigation }) => {
  return (
    <View style={{flex:1}}>
      <Button
        title="Go to Tim's profile"
        onPress={() =>
          navigation.navigate('TimProfile')
        }
      />
      <Button
        title="Go to Belle's profile"
        color="red"
        onPress={() =>
          navigation.navigate('Profile', { name: 'Belle' })
        }
      />
      <Button
        title="ToDoList"
        color="red"
        onPress={() =>
          navigation.navigate('todolist')
        }
      />
      <Button
        title="APIkey demo"
        color="brown"
        onPress={() =>
          navigation.navigate('apikey')
        }
      />
      <Button
        title="Go to Cat profiles"
        color="green"
        onPress={() =>
          navigation.navigate('CatScreen')
        }
      />
      <Button
        title="Go to Converter"
        color="red"
        onPress={() =>
          navigation.navigate('converter')
        }
      />
      <Button
        title="Go to Tip Screen"
        color="blue"
        onPress={() =>
          navigation.navigate('tipscreen')
        }
      />

      <Button
        title="Go to List Screen"
        color="blue"
        onPress={() =>
          navigation.navigate('listscreen')
        }
      />

      <Button
        title="Go to Camera Demo"
        color="blue"
        onPress={() =>
          navigation.navigate('camerademo')
        }
      />

    </View>
  );
};
const ProfileScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};

export default MyStack;
