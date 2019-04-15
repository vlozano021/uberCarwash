/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

 import React, {Component} from 'react';
 import { Container, Header, Content, Button, Form, Input, Item, Icon } from 'native-base';
 import {Platform, StyleSheet, Text, View} from 'react-native';
 import firebase from 'react-native-firebase';

 type Props = {};
 export default class App extends Component<Props> {
   static navigationOptions = {
     title: 'CarWash',
     headerStyle: {
       backgroundColor: '#003399',
     },
     headerTintColor: 'white'
   };

     state = {
       location: ''
     };

     this.ref = firebase.firestore().collection('jobs');

     onLocationChange = (location) => {
       this.setState({ location: location });
     }

     render() {
      return (
        <Container>
          <Content contentContainerStyle={styles.content}>
            <Item regular style={styles.searchBar}>
              <Icon active name='search' />
              <Input
                value={this.state.location}
                placeholder='What database are you looking for today?'
                onChangeText={this.onLocationChange}
              />
            </Item>


           <View style={styles.buttonContainer}>
             <Button bordered dark style={styles.dateButton} onPress={() => this.ref.add({
                title: "HELLO WORLD",
                complete: false,
              })}>
               <Text>Available Services</Text>
             </Button>

             <Button bordered dark style={styles.dateButton}
             onPress={() => this.props.navigation.navigate('Second')}>
               <Text>Set Up Appointment</Text>
             </Button>
           </View>
         </Content>
       </Container>
     );
   }
 }

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row"
  },
  content: {
    marginLeft: '5%'
  },
  dateButton: {
    padding: 15,
    marginRight: 10,
  },
  searchBar: {
    marginTop: 20,
    marginBottom: 20,
    width: '95%',
    elevation: 5,
    backgroundColor: 'white',
    borderRadius: 3,
  }
});
