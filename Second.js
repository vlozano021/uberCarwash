import React, {Component} from 'react';
import { Container, Header, Content, Button, Form, Input, Item, List, ListItem, Radio } from 'native-base';
import {Platform, StyleSheet, Text, View} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
 static navigationOptions = {
 title: 'Set Up Appointment',
 headerStyle: {
   backgroundColor: '#5699FF',
 },
 headerTintColor: 'white',
};

state={
  name:'',
  location:'',
  phone_number:'',
  email:'',
  year:'',
  make:'',
  model:'',
  plate_number:'',
  date:'',
  time:''
};

 render() {
   return (
     <Container style={styles.container}>
       <Content>
         <Text style={styles.availableServices}>Personal Info:</Text>
         <Item regular style={styles.textbox}>
           <Input value={this.state.name} onChangeText={(text) => this.setState({name:text})} placeholder='Name:'/>
         </Item>
         <Item regular style={styles.textbox}>
           <Input value={this.state.location} onChangeText={(text) => this.setState({location:text})} placeholder='Location:'/>
         </Item>
         <Item regular style={styles.textbox}>
           <Input value={this.state.phone_number} onChangeText={(text) => this.setState({phone_number:text})} placeholder='Phone Number:'/>
         </Item>
         <Item regular style={styles.textbox}>
           <Input value={this.state.email} onChangeText={(text) => this.setState({email:text})} placeholder='Email Address:'/>
         </Item>
         <Text style={styles.availableServices}>Vehicle Info:</Text>
         <Item regular style={styles.textbox}>
           <Input value={this.state.year} onChangeText={(text) => this.setState({year:text})} placeholder='Year:'/>
         </Item>
         <Item regular style={styles.textbox}>
           <Input value={this.state.make} onChangeText={(text) => this.setState({make:text})} placeholder='Make:'/>
         </Item>
         <Item regular style={styles.textbox}>
           <Input value={this.state.model} onChangeText={(text) => this.setState({model:text})} placeholder='Model:'/>
         </Item>
         <Item regular style={styles.textbox}>
           <Input value={this.state.plate_number} onChangeText={(text) => this.setState({plate_number:text})} placeholder='Plate #:'/>
         </Item>
         <Text style={styles.availableServices}>Date and Time:</Text>
         <Item regular style={styles.textbox}>
           <Input value={this.state.date} onChangeText={(text) => this.setState({date:text})} placeholder='Date: mm/dd/yyyy'/>
         </Item>
         <Item regular style={styles.textbox}>
           <Input value={this.state.time} onChangeText={(text) => this.setState({time:text})} placeholder='Time: Standard time'/>
         </Item>
         <Button block style ={styles.button} onPress={() => this.props.navigation.navigate('Third', {
             name: this.state.name,
             location: this.state.location,
             phone_number: this.state.phone_number,
             email: this.state.email,
             year: this.state.year,
             make: this.state.make,
             model: this.state.model,
             plate_number: this.state.plate_number,
             date: this.state.date,
             time: this.state.time
           })}>
           <Text style={styles.buttonText}>Select Service</Text>
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
