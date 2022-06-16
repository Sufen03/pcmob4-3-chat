import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useEffect, useState} from 'react';
import firebase from '../database/firebaseDB';
import { GiftedChat } from 'react-native-gifted-chat';

const auth = firebase.auth();

const demoMessage = {
  _id: 1,
				text: 'Hello there!',
				createdAt: new Date(),
				user: {
					_id: 2,
					name: 'Demo person',
					avatar: 'https://placeimg.com/140/140/any'
				}

};

export default function ChatScreen() {
  const [messages, setMessages] = useState([]);
  useEffect(()=>{
    setMessages([demoMessage]);
    //auth.onAuthStateChanged((user)=>{
      //if (user){
        //navigation.navigate("Chat",{id: user.id, email: user.email});
      //} else {
        //navigation.navigate("Login");
      //}
    //});
  }, []);

  function sendMessages(newMessages){
    console.log(newMessages);
    setMessages([...messages, ...newMessages]);
  }

  return (
    <GiftedChat
			messages={messages}
			onSend={(newMessages) => sendMessages(newMessages)}
			renderUsernameOnMessage={true}
			listViewProps={{
				style: {
				  backgroundColor: "#666",
				},
			}}
			user={{_id: 1,}}
		/>
  );
}

const styles = StyleSheet.create({})