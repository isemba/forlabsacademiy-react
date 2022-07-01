import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import {
  faArrowLeft,
  faGear,
  faStar,
  faCalendar,
  faLocationDot,
  faAddressBook,
  faAngleRight,
  faAngleDown
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const CommentFilter = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}><FontAwesomeIcon icon={faArrowLeft} /></Text>
            </Pressable>
            <View style={{textAlign:'left',width:'100%'}}>
            <Text style={styles.filterText}>En yararlı</Text>
            <Text style={styles.filterText}>En olumlu</Text>
            <Text style={styles.filterText}>En Eleştirel</Text>
            <Text style={styles.filterText}>En yeni</Text></View>
          </View>
          <View> 
          </View>
        </View>
      </Modal>
      <Pressable
        
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Sırala önce en yararlı <FontAwesomeIcon style={{color: "#FF3F55"}} icon={faAngleDown} /></Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    position:'absolute',
    bottom:-50,
    margin: 30,
    width:'100%',
    height:200,
    backgroundColor: "#FFF",
    borderRadius:20 ,
    borderWidth:1,
    borderColor:'#00000020',
    paddingTop: 40,
    paddingLeft:10,
    paddingRight:10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    
  },
  filterText:{
    paddingTop:5,
    paddingBottom:5,
    borderBottomWidth:1,
    borderBottomColor:'#00000030'
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    position:'absolute',
    left:10,
    top:10,
    
  },
  textStyle: {
    color: "#FF3F55",
    fontWeight: "bold",
    textAlign: "center",
    
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default CommentFilter;