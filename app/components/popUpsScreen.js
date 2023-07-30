import Modal from "react-native-modal";
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";

const mainColor = '#8200d6';

export default function PopUpsScreen() {
  const [isModalVisibleSucess, setModalSucessVisible] = useState(false);
  const [isModalVisibleFailure, setModalFailureVisible] = useState(false);
  const toggleModalSucess = () => {
    setModalSucessVisible(!isModalVisibleSucess);
  };
  const toggleModalFailure = () => {
    setModalFailureVisible(!isModalVisibleFailure);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.titleView}>
        <Text style={styles.title}>Pop-up Screen</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.buttonView}>
          <TouchableOpacity onPress={toggleModalSucess}>
            <Text style={styles.buttonText}>Success</Text>
          </TouchableOpacity>
        </View>
        <Modal isVisible={isModalVisibleSucess} style={styles.mainModel}>
          <View style={styles.successContent}>
            <FontAwesome5 name="laugh" size={100} color="white" />
            <Text style={styles.popupTitle}>YES!!</Text>
            <Text style={styles.popupSubTitle}>Everything is working</Text>
            <View style={styles.sucessBtnView}>
              <TouchableOpacity onPress={toggleModalSucess}>
                <Text style={styles.successBtnText}>Continue</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <View style={styles.buttonView}>
          <TouchableOpacity onPress={toggleModalFailure}>
            <Text style={styles.buttonText}>Failure</Text>
          </TouchableOpacity>
        </View>
        <Modal isVisible={isModalVisibleFailure} style={styles.mainModel}>
          <View style={styles.failureContent}>
            <Ionicons name="sad-outline" size={100} color="white" />
            <Text style={styles.popupTitle}>UH-SNAP!</Text>
            <Text style={styles.popupSubTitle}>Something just broke</Text>
            <View style={styles.failureBtnView}>
              <TouchableOpacity onPress={toggleModalFailure}>
                <Text style={styles.failureBtnText}>Go Back</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>

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
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  titleView: {
    backgroundColor: mainColor,
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  successContent: {
    backgroundColor: '#00C853',
    borderRadius: 30,
    padding: 10,
    alignItems: 'center',
    width: '95%',
  },
  sucessBtnView: {
    backgroundColor: 'white',
    borderRadius: 30,
    paddingVertical: 5,
    width: '95%',
    marginVertical: 10,
  },
  successBtnText: {
    color: '#00C853',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  mainModel: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  popupTitle: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  popupSubTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 5,
  },
  failureContent: {
    backgroundColor: '#D50000',
    borderRadius: 30,
    padding: 10,
    alignItems: 'center',
    width: '95%',
  },
  failureBtnView: {
    backgroundColor: 'white',
    borderRadius: 30,
    paddingVertical: 5,
    width: '95%',
    marginVertical: 10,
  },
  failureBtnText: {
    color: '#D50000',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});