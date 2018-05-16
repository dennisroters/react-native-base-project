import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Container, Content, Text} from "native-base";

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <Content padder style={s.content}>
        <Text>Home Screen</Text>
        <Button primary onPress={() => alert('button pressed')}>
          <Text>Test</Text>
        </Button>
      </Content>
    );
  }
}

const s = StyleSheet.create({
  content: {
    backgroundColor: "#fff",
    padding: 20,
  },
});

export default HomeScreen;