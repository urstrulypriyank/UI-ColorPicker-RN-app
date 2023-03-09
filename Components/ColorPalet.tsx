import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import React, {useState} from 'react';

const colorPalet = props => {
  return (
    <View>
      <View
        style={[
          styles.circle,
          {backgroundColor: props.randomBgGenrator},
        ]}></View>
      <Text style={styles.circleText} selectable={true}>
        {props.randomBgGenrator}
      </Text>
    </View>
  );
};

export default colorPalet;

const styles = StyleSheet.create({
  circle: {
    borderColor: 'black',
    borderRadius: 100,
    width: 180,
    height: 90,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  circleText: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    padding: 5,
    textAlign: 'center',
  },
});
