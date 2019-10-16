/*import React, {Component} from 'react';
import {View} from 'react-native';

import List from './List';
import Input from './Input';
import Title from './Title';

export default class App extends Component {
  state = {
    todos: ['Click to remove', 'Learn React Native', 'Write Code', 'Ship App'],
  };

  onAddTodo = text => {
    const {todos} = this.state;

    this.setState({
      todos: [text, ...todos],
    });
  };

  onRemoveTodo = index => {
    const {todos} = this.state;

    this.setState({
      todos: todos.filter((todo, i) => i !== index),
    });
  };

  render() {
    const {todos} = this.state;

    return (
      <View>
        <Title>To-Do List</Title>
        <Input
          placeholder={'Type a todo, then hit enter!'}
          onSubmitEditing={this.onAddTodo}
        />
        <List list={todos} onPressItem={this.onRemoveTodo} />
      </View>
    );
  }
}*/

import React from 'react';
import {Button, Text, View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
//import {createBottomTabNavigator} from 'react-navigation-tabs';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home!</Text>
        <Button
          title="Go to Settings"
          onPress={() =>
            this.props.navigation.navigate('Settings', {
              itemId: 86,
            })
          }
        />
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    const {params} = this.props.navigation.state;
    const itemId = params ? params.itemId : null;

    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>{`Settings!${itemId}`}</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}

const TabNavigator = createStackNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen,
});

export default createAppContainer(TabNavigator);
