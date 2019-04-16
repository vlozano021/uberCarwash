import React, {Component} from 'react';

import {
  Container, Header, Content, Button, Form, Input, Item, Icon, List, ListItem, Left, Right, Radio, Card, CardItem, Body
} from 'native-base';

import {Platform, StyleSheet, Text, View} from 'react-native';

import firebase from 'react-native-firebase';

const STANDARD = "standard";
const PREMIUM = "premium";
const DELUXE = "deluxe";
const VIP = "vip";

type Props = {};
export default class App extends Component<Props> {
  static navigationOptions = {
  title: 'Car Wash',
  headerStyle: {
    backgroundColor: '#5699FF',
  },
  headerTintColor: 'white',
  };

  state = {
    serviceType: STANDARD
  };

  setupAppointment = () => {
     const ref = firebase.firestore().collection('appointment');
     const name = this.props.navigation.getParam('name', null);
     const location = this.props.navigation.getParam('location', null);
     const phone_number = this.props.navigation.getParam('phone_number', null);
     const email = this.props.navigation.getParam('email', null);
     const year = this.props.navigation.getParam('year', null);
     const make = this.props.navigation.getParam('make', null);
     const model = this.props.navigation.getParam('model', null);
     const plate_number = this.props.navigation.getParam('plate_number', null);

     ref.add({
        name: name,
        location: location,
        phone_number: phone_number,
        email: email,
        year: year,
        make: make,
        model: model,
        plate_number: plate_number,
        serviceType: this.state.serviceType
      }).then(() => this.props.navigation.navigate('Fourth'));
  }


  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <Text style={styles.availableServices}>Available Services</Text>
          <ListItem onPress={() => this.setState({serviceType:STANDARD})}>
            <Left>
              <Text style={styles.listText}>Standard</Text>
            </Left>
            <Right>
              <Radio selected={this.state.serviceType === STANDARD}/>
            </Right>
          </ListItem>
          <ListItem onPress={() => this.setState({serviceType:PREMIUM})}>
            <Left>
              <Text style={styles.listText}>Premium</Text>
            </Left>
            <Right>
              <Radio selected={this.state.serviceType === PREMIUM} />
            </Right>
          </ListItem>
          <ListItem onPress={() => this.setState({serviceType:DELUXE})}>
            <Left>
              <Text style={styles.listText}>Deluxe</Text>
            </Left>
            <Right>
              <Radio selected={this.state.serviceType === DELUXE} />
            </Right>
          </ListItem>
          <ListItem onPress={() => this.setState({serviceType:VIP})}>
            <Left>
              <Text style={styles.listText}>VIP</Text>
            </Left>
            <Right>
              <Radio selected={this.state.serviceType === VIP} />
            </Right>
          </ListItem>
          <Card style={styles.card}>
            <CardItem>
              <Body>
                <Text style={styles.tabText}>TOTAL: $___</Text>
              </Body>
            </CardItem>
          </Card>
          <Button block style={styles.button} onPress={() => this.setupAppointment()}>
            <Text style={styles.buttonText}>Pay</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  availableServices: {
    fontSize: 25,
    color: 'white',
    marginTop: '5%',
    textAlign: 'center'
    },
  card: {
    width: '50%',
    alignSelf: 'flex-end',
    marginRight: '2%'
    },
  container: {
    backgroundColor: '#5699FF',
  },
  button: {
    marginTop:'5%',
    backgroundColor:'white',
    alignSelf: 'center',
    width: '60%',
  },
  listText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center'
  },
  tabText: {
    fontSize: 18
    },
  buttonText: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 14,
  },
});
