import React, {Component} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

export default class List extends Component {
  renderItem = (text, i) => {
    const {onPressItem} = this.props;

    return (
      <TouchableOpacity key={i} style={styles.item}>
        <Text>{text}</Text>
        <Text onPress={() => onPressItem(i)}>X</Text>
      </TouchableOpacity>
    );
  };

  render() {
    const {list} = this.props;

    return <View>{list.map(this.renderItem)}</View>;
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'whitesmoke',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    padding: 15,
  },
});
