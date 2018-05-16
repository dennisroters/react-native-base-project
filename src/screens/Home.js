import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Container, Content, Text} from "native-base";
import Icon from 'react-native-vector-icons/Ionicons';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <Content padder style={s.content}>
        <Icon name="md-home" size={30} color="#900" />
        <Text>Home Screen</Text>
        <Button light onPress={() => alert('button pressed')}>
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