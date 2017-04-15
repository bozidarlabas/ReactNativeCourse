// React
// knows how a component should behave
// knows how to take a bunch of components and make them work together

//React Native
// knows hot to take the output from a component and place it on the screen
// provides default core components (image, text)

// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// Create a component
const App = () => (
  // flex: 1 => expand this component to fill entire content of device
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

//Render component to the device
// Only the root component uses AppRegistry
AppRegistry.registerComponent('albums', () => App);

