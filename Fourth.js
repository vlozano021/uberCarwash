import React, {Component} from 'react';

import {
  Container, Header, Content, Button, Form, Input, Item, Icon, List, ListItem, Left, Right, Radio,
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import {Platform, StyleSheet, Text, View} from 'react-native';

const ON_SITE = "on_site";
const MOBILE = "mobile";
const OTHER = "other";

type Props = {};
export default class App extends Component<Props> {
  static navigationOptions = {
  title: 'Confirmation',
  headerStyle: {
    backgroundColor: '#5699FF',
  },
  headerTintColor: 'white',
  };

  state = {
    location: '',
    serviceType: ON_SITE
  };
  onLocationChange = (location) => {
    this.setState({location: location});
  }
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <Text style={styles.availableServices}>Thank you for choosing us! We will contact you shortly!</Text>
          <Button block style ={styles.button} onPress={() => this.props.navigation.reset([NavigationActions.navigate({ routeName: 'Second' })], 0)
}>
            <Text style={styles.buttonText}>Set another appointment</Text>
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
    marginTop:'3%',
    backgroundColor:'white',
    alignSelf: 'center',
    width: '60%',
  },
  listText: {
    color: 'white',
    fontSize: 18,
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
