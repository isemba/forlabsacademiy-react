import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Pressable,
  Alert,
  Modal,
  Button,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import ProgressBar from 'react-native-progress/Bar';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faArrowLeft,
  faGear,
  faStar,
  faCalendar,
  faLocationDot,
  faAddressBook,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';
import CommentRate from '../components/CommentRate';
import Comment from '../components/Comment';


const ProfileScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
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
            <View style={styles.modalHeader}>
              <Pressable
                style={styles.buttonClose} 
                onPress={() => setModalVisible(!modalVisible)}>
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  size={20}
                  style={{color: 'grey'}}
                />
              </Pressable>
              <Pressable>
                <FontAwesomeIcon
                  icon={faGear}
                  size={20}
                  style={{color: 'grey'}}
                />
              </Pressable>
            </View>
            <ScrollView>
              <View style={styles.modalsection1}>
                <View style={styles.profileImgbox}>
                  <Image
                    style={styles.tinyLogo}
                    source={{
                      uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }}
                  />
                  <View style={{display: 'flex', marginLeft: 15}}>
                    <Text
                      style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
                      İSİM S.
                    </Text>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        marginTop: 7,
                      }}>
                      <FontAwesomeIcon
                        icon={faStar}
                        size={19}
                        style={{color: '#ffcc5c'}}
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        size={19}
                        style={{color: '#ffcc5c'}}
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        size={19}
                        style={{color: '#ffcc5c'}}
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        size={19}
                        style={{color: '#ffcc5c'}}
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        size={19}
                        style={{color: '#ffcc5c'}}
                      />
                      <Text
                        style={{
                          marginLeft: 10,
                          fontWeight: '500',
                          fontSize: 16,
                        }}>
                        22
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.Profileİnfo}>
                  <Text style={styles.infoText}>
                    <FontAwesomeIcon icon={faCalendar} /> Ocak 2016 Tarihinden
                    bari üye{' '}
                  </Text>
                  <Text style={styles.infoText}>
                    <FontAwesomeIcon icon={faLocationDot} /> Kavaklıdere{' '}
                  </Text>
                  <Text style={styles.infoText}>
                    <FontAwesomeIcon icon={faAddressBook} /> Hızlı,güvenilir
                    satış
                  </Text>
                  <TouchableHighlight style={styles.csButton}>
                    <Text style={{color: 'white'}}>İlanlarımı görüntüle</Text>
                  </TouchableHighlight>
                </View>
              </View>
              <View
                style={{
                  alignSelf: 'stretch',
                  height: 1,
                  backgroundColor: '#DDD',
                  marginTop: 20,
                }}></View>
              <View style={styles.modalSeciton2}>
                <Text
                  style={{marginTop: 15, marginBottom: 15, fontWeight: 'bold'}}>
                  Hesabını doğrula
                </Text>
                <View style={styles.progressContainer}>
                  <ProgressBar progress={0.65} width={350} color={'#CED89E'} />
                  <Text>Hesabını doğrulamana birkaç adım kaldı</Text>
                  <View
                    style={{
                      alignSelf: 'stretch',
                      height: 1,
                      backgroundColor: '#DDD',
                    }}></View>

                  <TouchableHighlight>
                    <View style={{display: 'flex', flexDirection:'row', justifyContent:'space-between',width:'100%'}}>
                    <Text>
                      Diğer yöntemler ile doğrula
                      
                    </Text>
                    <FontAwesomeIcon icon={faAngleRight} /></View>
                  </TouchableHighlight>
                </View>
                <View style={{marginTop: 20}}>
                  <Text style={styles.head}>Yorumlar</Text>
                  <Text style={{marginBottom: 20, marginTop: 30}}>
                    İsim S. için yapılan yorumlar
                  </Text>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      flexWrap: 'wrap',
                    }}>
                    <CommentRate
                      points={10}
                      text={'Buluşmaya zamanında geldi'}
                    />
                    <CommentRate points={9} text={'Kibar'} />
                    <CommentRate points={8} text={'Güvenilir'} />
                    <CommentRate points={6} text={'Çabuk cevaplıyor'} />
                    <CommentRate points={5} text={'Yardımcı oldu'} />
                  </View>
                </View>
                <View
                  style={{
                    alignSelf: 'stretch',
                    height: 1,
                    backgroundColor: '#DDD',
                    marginTop: 20,
                  }}></View>
                  <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:10}}>
                    <Text style={styles.head}>Yorumlar</Text>
                    <Pressable ><Text style={{color:'#FF3F55'}}>Sırala</Text></Pressable>
                  </View>
                  <Comment />
                  <Comment />
                  <Comment />
                  <Comment />
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
      <Pressable
        onPress={() => setModalVisible(true)}>
        <Image
          style={{width: 40, height: 40,borderRadius:20}}
          source={{
            uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiBeWgOQYWldulYxc7AMNd0bLQdoikycqeWDPmza3YUG5cnirVQy_yh2j6tdXmCcrzr44&usqp=CAU'  
          }}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
    padding: 0,
  },
  modalView: {
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  
  tinyLogo: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  buttonClose: {},
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modalHeader: {
    alignSelf: 'stretch',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 20,
  },
  //modal section1
  modalsection1: {
    alignSelf: 'stretch',
    marginTop: 30,
  },
  profileImgbox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  Profileİnfo: {
    display: 'flex',
    marginTop: 20,
  },
  infoText: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  csButton: {
    backgroundColor: '#FF3F55',
    borderRadius: 15,
    height: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  progressContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 15,
    width: 372,
    height: 150,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 20,
    borderColor: '#DDD',
  },
  head: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default ProfileScreen;
