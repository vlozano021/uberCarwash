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

type Props = {};
export default class App extends Component<Props> {
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: 'white'
  };

  state = {
    location: ''
  };

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
              placeholder='Have you ever been to Maine?'
              onChangeText={this.onLocationChange}
            />
          </Item>

          <View style={styles.buttonContainer}>
            <Button bordered dark style={styles.dateButton}>
              <Text>All Dates</Text>
            </Button>

            <Button bordered dark style={styles.dateButton}
            onPress={() => this.props.navigation.navigate('Second')}>
              <Text>Guests</Text>
            </Button>
          </View>

          <Text>{this.state.location}</Text>

        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row'
  },
  content: {
    marginLeft: '5%'
  },
  dateButton: {
    padding: 15,
    marginRight: 10
  },
  searchBar: {
    marginTop: 20,
    marginBottom: 20,
    width: '95%',
    elevation: 5,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: 'black',
    shadowOpacity: 0.5,
    backgroundColor: 'white',
    borderRadius: 3
  }
});
