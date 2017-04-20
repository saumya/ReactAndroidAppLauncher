/**
 * App Launcher
 * https://github.com/saumya/ReactAndroidAppLauncher
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,Alert,Linking,
  View
} from 'react-native';

export default class AppLauncher extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Application Home
        </Text>
        <TouchableHighlight onPress={this._onPressFileManager.bind(this)}>
          <Text style={styles.welcome}> File Manager </Text>
        </TouchableHighlight>
      </View>
    );
  }
  _onPressFileManager(){
    //console.log('_onPressFileManager');
    //Alert.alert('Alert Title','My Alert Msg');

    //const urlToOpen = 'tel:9876543210';
    const urlToOpen = 'file:///android_asset/';
    
    Linking.openURL(urlToOpen);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AppLauncher', () => AppLauncher);
