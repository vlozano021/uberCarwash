import React, {Component} from 'react';

import {
  Container, Header, Content, Button, Form, Input, Item, Icon, List, ListItem, Left, Right, Radio, Card, CardItem, Body
} from 'native-base';

import {Platform, StyleSheet, Text, View} from 'react-native';

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
    location: '',
    serviceType: STANDARD
  };
  onLocationChange = (location) => {
    this.setState({location: location});
  }
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <Text style={styles.availableServices}>Available Services</Text>
          <ListItem onPress={() => this.setState({serviceType:STANDARD})}>
            <Left>
              <Text style={styles.listText}>$___ Standard</Text>
            </Left>
            <Right>
              <Radio selected={this.state.serviceType === STANDARD}/>
            </Right>
          </ListItem>
          <ListItem onPress={() => this.setState({serviceType:PREMIUM})}>
            <Left>
              <Text style={styles.listText}>$___ Premium</Text>
            </Left>
            <Right>
              <Radio selected={this.state.serviceType === PREMIUM} />
            </Right>
          </ListItem>
          <ListItem onPress={() => this.setState({serviceType:DELUXE})}>
            <Left>
              <Text style={styles.listText}>$___ Deluxe</Text>
            </Left>
            <Right>
              <Radio selected={this.state.serviceType === DELUXE} />
            </Right>
          </ListItem>
          <ListItem onPress={() => this.setState({serviceType:VIP})}>
            <Left>
              <Text style={styles.listText}>$___ VIP</Text>
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
          <Button block style ={styles.button} onPress={() => this.props.navigation.navigate('Second')}>
            <Text style={styles.buttonText}>Set Up Appointment</Text>
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
