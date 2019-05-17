import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DrawerNavigator from './Navigation/DrawerNavigator';
import firebase from "firebase";
import AuthLoadingScreen from './pages/AuthLoadingScreen';
import LoginScreen from './pages/LoginPages';

import {createSwitchNavigator, createStackNavigator,createAppContainer  } from "react-navigation";

const AppStack = createSwitchNavigator({DrawerNavigator});
const AuthStack = createStackNavigator({Login: LoginScreen},{ headerMode :'none'});

const AppContainer =  createAppContainer(createStackNavigator(
  {
    AuthLoading : AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));

export default class App extends React.Component {

  componentWillMount () {
    firebase.initializeApp({
     apiKey:"AIzaSyAE01MDv6jJSaDO2mwLso1IN-oIDA7Pk3s",
     authDomain: "expo-project-84e05.firebaseapp.com",
     databaseURL:"https://expo-project-84e05.firebaseio.com",
     projectId:"expo-project-84e05",
     storageBucket:"expo-project-84e05.appspot.com",
     messagingSenderId:"968095272958"
    });
  }

  render() {
    return (

      <AppContainer/>
     
    );
  }
}