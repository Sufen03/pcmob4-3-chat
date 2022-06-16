import { StyleSheet, Text, View, TextInput, Keyboard,} from 'react-native';
import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import firebase from '../database/firebaseDB';

const auth = firebase.auth();

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorText, setErrorText] = useState("");

  function login(){
    Keyboard.dismiss();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(()=>{
      navigation.navigate("Chat");
    })
      .catch((error)=>{
      console.log(error.message);
      setErrorText(error.message);
  });
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Chat App</Text>
      <Text style={styles.fieldTitle}>Email</Text>
      <TextInput 
      style={styles.input} 
      placeholder="Enter email"
      onChangeText={(text)=>setEmail(text)}
      value={email}
      />
      <Text style={styles.fieldTitle}>Password</Text>
      <TextInput 
      style={styles.input}
      placeholder="Enter password" 
      secureTextEntry={true}
      onChangeText={(text)=>setPassword(text)}
      value={password}
      />
      
      <TouchableOpacity style={styles.loginButton} onPress={login}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      <Text style={styles.errorText}>{errorText}</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  errorText:{
    color: "red",
    marginVertical: 20,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 24,
  },
  fieldTitle: {
    fontSize: 18,
    marginBottom: 12,
  },
  input: {
    borderColor: "#999",
    borderWidth: 1,
    marginBottom: 24,
    padding: 4,
    height: 36,
    fontSize: 18,
    backgroundColor: "white",
  },
  loginButton: {
    backgroundColor: "blue",
    width: 120,
    alignItems: "center",
    padding: 18,
    marginTop: 12,
    marginBottom: 36,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
})