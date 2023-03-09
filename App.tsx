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
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const [bgColor, setBgColor] = useState('#FFFFFF');
  const randomBgGenrator = () => {
    let color = '#';
    const textRange = '0123456789ABCDEF';
    for (let i = 0; i < 6; i++) {
      color += textRange[Math.floor(Math.random() * 16)];
    }
    // console.log(color);
    // setBgColor(color);
    return color;
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor={bgColor} hidden />

      <View style={[styles.mainContainer, {backgroundColor: bgColor}]}>
        <View style={{...styles.btnContainer, backgroundColor: 'white'}}>
          <TouchableOpacity
            style={{...styles.btn, margin: 10}}
            onPress={() => {
              randomBgGenrator();
            }}>
            <Text>Click Me To Genrate new color</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={styles.colorPaletContainer}>
            <ColorPalet randomBgGenrator={randomBgGenrator} />
            <ColorPalet randomBgGenrator={randomBgGenrator} />
            <ColorPalet randomBgGenrator={randomBgGenrator} />
            <ColorPalet randomBgGenrator={randomBgGenrator} />
            <ColorPalet randomBgGenrator={randomBgGenrator} />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
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
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 10,
  },
});
export default App;
