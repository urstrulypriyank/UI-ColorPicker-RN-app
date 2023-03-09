import React, {useEffect, useState} from 'react';
import ColorPalet from './Components/ColorPalet';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  FlatList,
} from 'react-native';

function App(): JSX.Element {
  const [bgColor, setBgColor] = useState('#FFFFFF');
  const [flag, setFlag] = useState(true);
  const randomBgGenrator = () => {
    let color = '#';
    const textRange = '0123456789ABCDEF';
    for (let i = 0; i < 6; i++) {
      color += textRange[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const [hexData, setHexData] = useState([]);
  const setData = () => {
    let arr = [];
    for (let i = 0; i < 500; i++) {
      arr.push(randomBgGenrator());
    }
    setHexData([...arr]);
  };
  useEffect(() => {
    setData();
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor={bgColor} hidden />

      <View style={[styles.mainContainer, {backgroundColor: bgColor}]}>
        <View style={{...styles.btnContainer, backgroundColor: 'white'}}>
          <TouchableOpacity
            style={{...styles.btn, margin: 10}}
            onPress={() => {
              setData();
            }}>
            <Text>Click Me To Genrate new color</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={hexData}
          renderItem={({item}) => <ColorPalet randomBgGenrator={item} />}
          keyExtractor={item => item}
          style={styles.colorPaletContainer}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
  },
  btn: {
    backgroundColor: 'grey',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 10,
  },
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorPaletContainer: {
    // flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 10,
  },
});
export default App;
