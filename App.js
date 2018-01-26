import React from 'react';
import { StyleSheet, Text, View, Button, Modal } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import styles from './Styles';
import Home from './Home';
import Help from './Help';

export default DrawerNavigator({
  Home: { screen: Home },
  Help: { screen: Help }
});