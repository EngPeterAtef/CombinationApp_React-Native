import "react-native-gesture-handler";
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, View, SafeAreaView, Switch, Pressable, Image } from 'react-native';
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import React, { useRef, useMemo, useCallback, useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Entypo, AntDesign } from '@expo/vector-icons';

const mainColor = '#8200d6';

export default function BottomSheetScreen({ navigation }) {
  const bottomSheetModalRef = useRef(null); // reference to the model
  const snapPoints = useMemo(() => ['50%', '75%'], []); // snap points for the model
  const [index, setIndex] = useState(-1);
  const [darkMode, setDarkMode] = useState(false);
  const [device, setDevice] = useState(false);
  const [theme, setTheme] = useState('dim');

  const openButtonSheet = () => {
    console.log('open bottom sheet');
    bottomSheetModalRef.current?.present(); // open the bottom sheet
  };
  // know when the bottom sheet is opened
  const handleSheetChanges = useCallback((ind) => {
    setIndex(ind);
    console.log('index', index);
  }, []);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <SafeAreaView style={[styles.container, { backgroundColor: darkMode ? 'black' : (index == -1) ? 'white' : (index == 1) ? '#999' : '#ccc' }]}>
          <StatusBar style={!darkMode ? 'dark' : 'light'}
            backgroundColor={darkMode ? 'black' : 'white'}
          />
          <View style={styles.titleView}>
            <Text style={styles.title}>Button Sheet Screen</Text>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Image source={require('../../assets/user-profile.jpg')} style={{ width: 50, height: 50, borderRadius: 20 }} />
            </TouchableOpacity>
          </View>
          <View style={styles.content}>
            <View style={styles.buttonView}>
              <TouchableOpacity onPress={openButtonSheet}>
                <Text style={styles.buttonText}>Open Bottom Sheet</Text>
              </TouchableOpacity>
            </View>
          </View>
          <BottomSheetModal
            ref={bottomSheetModalRef}
            snapPoints={snapPoints}
            index={1}
            onChange={handleSheetChanges}
            backgroundStyle={styles.bottomSheetBackGround}
          >
            <View style={styles.bottomSheetView}>
              <Text style={styles.buttomSheetTitle}>Mode</Text>
              <View style={styles.rowView}>
                <Text style={styles.subTitle}>Dark Mode</Text>
                <Switch
                  value={darkMode}
                  onChange={() => setDarkMode(!darkMode)}
                />
              </View>
              <View style={styles.rowView}>
                <Text style={styles.subTitle}>Use Device Settings</Text>
                <Switch
                  value={device}
                  onChange={() => setDevice(!device)}
                />
              </View>
              <Text style={[styles.descriptionText, { width: '100%' }]}>Set dark mode or use the devide settings.</Text>
              <View
                style={{
                  width: '100%',
                  borderBottomWidth: StyleSheet.hairlineWidth,
                  borderBottomColor: 'black',
                  marginVertical: 20,
                }}
              />
              <Text style={[styles.buttomSheetTitle, { width: '100%' }]}>Theme</Text>
              <Pressable
                style={styles.rowView}
                onPress={() => setTheme('dim')}
              >
                <Text style={styles.subTitle}>Dim</Text>
                {
                  theme == 'dim' ?
                    <AntDesign name="checkcircle" size={24} color={mainColor} />
                    :
                    <Entypo name="circle" size={24} color="#333" />
                }
              </Pressable>
              <Pressable
                style={styles.rowView}
                onPress={() => setTheme('lightsOut')}
              >
                <Text style={styles.subTitle}>lights Out</Text>
                {
                  theme == 'lightsOut' ?
                    <AntDesign name="checkcircle" size={24} color={mainColor} />
                    :
                    <Entypo name="circle" size={24} color="#333" />
                }
              </Pressable>
            </View>
          </BottomSheetModal>
        </SafeAreaView>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonView: {
    backgroundColor: mainColor,
    borderRadius: 10,
    padding: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleView: {
    backgroundColor: mainColor,
    width: '100%',
    height: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
    flexDirection: 'row',
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 20,
  },
  bottomSheetView: {
    backgroundColor: 'white',
    flex: 1,
    margin: 10,
    padding: 10,
    alignItems: 'center',
  },
  bottomSheetBackGround: {
    backgroundColor: '#fff',
    borderRadius: 50,
  },
  buttomSheetTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 5,
  },
  subTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  descriptionText: {
    fontSize: 14,
    color: '#666',
  },
});
