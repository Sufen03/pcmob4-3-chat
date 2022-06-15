import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

export default function LoginScreen({ navigation }) {
  return (
    <View>
      <Text>Email</Text>
      <TextInput placeholder="Enter email" />
      <Text>Password</Text>
      <TextInput placeholder="Enter password" secureTextEntry={true} />
    </View>
  )
}

const styles = StyleSheet.create({})