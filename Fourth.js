import React, {Component} from 'react';
import { Container, Header, Content, Button, Form, Input, Item, List, ListItem, Radio } from 'native-base';
import {Platform, StyleSheet, Text, View} from 'react-native';

type Props = {};
export default class Second extends Component<Props> {
  static navigationOptions = {
  title: 'Set Up Appointment',
  headerStyle: {
    backgroundColor: '#5699FF',
  },
  headerTintColor: 'white',
};
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <Text style={styles.availableServices}>THANK YOU!</Text>
          <Text style={styles.listText}>Our staff should be in touch with you soon!</Text>
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
    fontSize: 14,
    marginTop: '5%'
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
