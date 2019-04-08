import React, {Component} from 'react';

import {
  Container, Header, Content, Button, Form, Input, Item, Icon, List, ListItem, Left, Right, Radio,
} from 'native-base';

import {Platform, StyleSheet, Text, View} from 'react-native';

const ON_SITE = "on_site";
const MOBILE = "mobile";
const OTHER = "other";

type Props = {};
export default class App extends Component<Props> {
  static navigationOptions = {
  title: 'Payment Info',
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
          <Text style={styles.availableServices}>Choose Payment Method:</Text>
          <ListItem onPress={() => this.setState({serviceType:ON_SITE})}>
            <Left>
              <Text style={styles.listText}>Pay on site</Text>
            </Left>
            <Right>
              <Radio selected={this.state.serviceType === ON_SITE}/>
            </Right>
          </ListItem>
          <ListItem onPress={() => this.setState({serviceType:MOBILE})}>
            <Left>
              <Text style={styles.listText}>Pay via mobile</Text>
            </Left>
            <Right>
              <Radio selected={this.state.serviceType === MOBILE} />
            </Right>
          </ListItem>
          <ListItem onPress={() => this.setState({serviceType:OTHER})}>
            <Left>
              <Text style={styles.listText}>Other Payment Method</Text>
            </Left>
            <Right>
              <Radio selected={this.state.serviceType === OTHER} />
            </Right>
          </ListItem>
          <Button block style ={styles.button}>
            <Text style={styles.buttonText} onPress={() => this.props.navigation.navigate('Fourth')}>PAY</Text>
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
