import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

const colorPalet = props => {
  const [bgColor, setBgColor] = useState(props.randomBgGenrator());
  return (
    <View>
      <View style={[styles.circle, {backgroundColor: bgColor}]}></View>
      <Text style={styles.circleText} selectable>
        {bgColor}
      </Text>
    </View>
  );
};

export default colorPalet;

const styles = StyleSheet.create({
  circle: {
    borderColor: 'black',
    borderRadius: 100,
    width: 90,
    height: 90,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  circleText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
