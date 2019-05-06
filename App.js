import React, {Component} from 'react';

import {
  Container, Header, Content, Button, Form, Input, Item, Icon, List, ListItem, Left, Right, Radio
} from 'native-base';

import {Platform, StyleSheet, Text, View, Image} from 'react-native';

const ON_SITE = "on_site";
const MOBILE = "mobile";
const OTHER = "other";

type Props = {};
export default class App extends Component<Props> {
  static navigationOptions = {
  title: 'About',
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
          <Text style={styles.availableServices}>Welcome!</Text>
          <View>
            <Image
              style={styles.images_style}
              source={require('/reactnative/uberCarwash/images/carwash.jpg')}
            />
          </View>
          <Text style={styles.listText}>Our app lets you set an appointment with us to give your car a wash.</Text>
          <Text style={styles.listText}>What's unique with our service?</Text>
          <Text style={styles.listText}>We will bring your car to a car wash location and get it washed for you!</Text>
          <Button block style ={styles.button} onPress={() => this.props.navigation.navigate('Second')}>
            <Text style={styles.buttonText}>Set an appointment</Text>
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
  images_style: {
    width: 400,
    height: 300,
    alignSelf: 'center'
  }
});
