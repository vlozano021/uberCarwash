import React, {Component} from 'react';
import { Container, Header, Content, Button, Form, Input, Item, List, ListItem, Radio } from 'native-base';
import {Platform, StyleSheet, Text, View} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
 static navigationOptions = {
 title: '                  Set Up Appointment',
 headerStyle: {
   backgroundColor: '#5699FF',
 },
 headerTintColor: 'white',
};
 render() {
   return (
     <Container style={styles.container}>
       <Content>
         <Text style={styles.availableServices}>Personal Info:</Text>
         <Item regular style={styles.textbox}>
           <Input placeholder='Name:'/>
         </Item>
         <Item regular style={styles.textbox}>
           <Input placeholder='Location:'/>
         </Item>
         <Item regular style={styles.textbox}>
           <Input placeholder='Phone Number:'/>
         </Item>
         <Item regular style={styles.textbox}>
           <Input placeholder='Email Address:'/>
         </Item>
         <Text style={styles.availableServices}>Vehicle Info:</Text>
         <Item regular style={styles.textbox}>
           <Input placeholder='Year:'/>
         </Item>
         <Item regular style={styles.textbox}>
           <Input placeholder='Make:'/>
         </Item>
         <Item regular style={styles.textbox}>
           <Input placeholder='Model:'/>
         </Item>
         <Item regular style={styles.textbox}>
           <Input placeholder='Plate #:'/>
         </Item>
         <Text style={styles.availableServices}>Date and Time:</Text>
         <Button block style ={styles.button} onPress={() => this.props.navigation.navigate('Third')}>
           <Text style={styles.buttonText}>Proceed to Payment</Text>
         </Button>
       </Content>
     </Container>
   );
 }
}

const styles = StyleSheet.create({
 availableServices: {
   marginLeft: '5%',
   fontSize: 18,
   color: 'white',
   marginTop: '2%'
   },
 container: {
   backgroundColor: '#5699FF',
 },
 button: {
   marginTop: '8%',
   backgroundColor:'white',
   alignSelf: 'center',
   width: '60%',
 },
 listText: {
   color: 'white',
   fontSize: 14
 },
 buttonText: {
   marginTop: '6%',
   color: 'black',
   fontSize: 14,
 },
 textbox: {
   marginTop: '2%',
   backgroundColor:'white',
   alignSelf: 'center',
   width: '94%',
 }
});
