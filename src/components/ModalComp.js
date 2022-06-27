import React, {useState} from 'react';
import {StyleSheet, Text, View, Modal, Pressable} from 'react-native';
import {
  faCommentDots,
  faAngleRight,
  faComments,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const ModalComp = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.commenticons}>
              <FontAwesomeIcon
                icon={faComments}
                size={80}
                style={{color: '#FC909D'}}
              />
            </View>
            <Text style={styles.modalText}>YANITLARI KAÇIRMA</Text>
            <Text
              style={{textAlign: 'center', marginTop: 10, marginBottom: 10}}>
              Mesaj bildirimlerini şimdi açmayı{'\n'} ister misin?
            </Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                width: '70%',
                justifyContent: 'space-between',
              }}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text
                  style={{
                    paddingLeft: 25,
                    paddingRight: 25,
                    color: '#ffffff',
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  Aç
                </Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose2]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text
                  style={{
                    color: '#ff3e56',
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  Şimdi Değil
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Pressable onPress={() => setModalVisible(true)}>
        <View style={styles.messagenotification}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              height: '100%',
            }}>
            <FontAwesomeIcon
              icon={faCommentDots}
              size={25}
              style={{color: '#757575'}}
            />
            <Text style={{marginLeft: 10, color: '#ffffff'}}>
              Mesaj Bildirimlerini aç
            </Text>
          </View>
          <FontAwesomeIcon
            icon={faAngleRight}
            size={25}
            style={{color: '#757575'}}
          />
        </View>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  messagenotification: {
    display: 'flex',
    marginBottom: 30,
    flexDirection: 'row',
    backgroundColor: '#2c2c2c',
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 40,
  },
  modalView: {
    width: 280,
    position: 'absolute',
    top: 150,
    left: 70,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingTop: 40,
    paddingBottom: 40,
    alignItems: 'center',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#ff3e56',
  },
  buttonClose2: {
    backgroundColor: '#ffffff',
    borderColor: '#ff3e56',
    borderWidth: 1,
  },
  modalText: {
    marginBottom: 15,
    fontWeight: 'bold',
    color: '#000000',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 40,
  },
  commenticons: {
    padding: 15,
    position: 'absolute',
    top: -45,
    borderRadius: 100,
    backgroundColor: '#EFEBEA',
  },
});
export default ModalComp;
