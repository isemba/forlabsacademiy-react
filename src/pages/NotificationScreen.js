import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  RefreshControl,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faMugSaucer,
  width,
} from '@fortawesome/free-solid-svg-icons/faMugSaucer';
import {faGear} from '@fortawesome/free-solid-svg-icons/faGear';
import {faCircleUser} from '@fortawesome/free-solid-svg-icons/faCircleUser';
import {faEllipsisVertical} from '@fortawesome/free-solid-svg-icons/faEllipsisVertical';
import {faXmark} from '@fortawesome/free-solid-svg-icons/faXmark';
import {fontSize} from '@mui/system';
import {ScrollView} from 'react-native';
import PagerViewOlguCan from '../components/PagerViewOlguCan';
import {Dimensions} from 'react-native';
import {Divider} from '@rneui/themed';
import Swipeable from 'react-native-swipeable';
import SwipeableOlgu from '../components/SwipeableOlgu';
import Lightbox from 'react-native-lightbox-v2';

import Swiper from 'react-native-swiper';
import OlguLightBox from '../components/OlguLightBox';

const screenWidth = Dimensions.get('window').width;
const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const NotificationScreen = ({navigation}) => {
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <ScrollView
      style={styles.Container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={styles.topContainer}>
        <Text style={styles.topContainerText}>Notifications</Text>
        <FontAwesomeIcon
          icon={faGear}
          size={30}
          color="#bbb"
          style={styles.topicon}
        />
      </View>
      <View style={styles.recent}>
        <Text
          style={{
            fontSize: 30,
            color: 'black',
            fontWeight: 'bold',
            marginVertical: 20,
          }}>
          Recent
        </Text>
        <Swiper height={200} horizontal={true}>
          <ScroolUser />

          <ScroolUser />
        </Swiper>
        <Text
          style={{
            fontSize: 30,
            color: 'black',
            fontWeight: 'bold',
            marginVertical: 20,
          }}>
          Earlier
        </Text>
        <Swiper horizontal={true} height={200}>
          <ScroolUser />
          <ScroolUser />
        </Swiper>
      </View>
      <View
        style={{
          width: '100%',
          height: 2,
          backgroundColor: '#aaa',
          marginVertical: 15,
        }}></View>
      <SwipeableOlgu />
      <Products navigation={navigation} />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Container: {
    padding: 15,
  },
  topContainerText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  topicon: {
    color: 'grey',
  },
  recent: {},
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    resizeMode: 'contain',
    zIndex: -1,
  },
  userblue: {
    position: 'absolute',
    color: '#30D5C8',
    zIndex: 99,
    top: 60,
    right: 10,
    backgroundColor: 'white',
    borderRadius: 25,
  },
  scrooCon: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
    width: screenWidth,
  },
  newIconstyle: {
    flex: 1,
  },
});

const ScroolUser = () => (
  <View style={styles.scrooCon}>
    <View style={{position: 'relative'}}>
      <Lightbox
        navigator={navigator}
        activeProps={{
          width: '80%',
          height: '60%',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
        <Image
          source={require('./olgu20222cv.jpg')}
          style={styles.avatar}></Image>
      </Lightbox>

      <FontAwesomeIcon icon={faCircleUser} style={styles.userblue} size={24} />
    </View>
    <View style={{width: '55%', marginHorizontal: 10}}>
      <Text style={{fontWeight: 'bold'}}>You could be making better deals</Text>
      <Text>Verified users make better deals.</Text>
      <Text>Take a minute to complete and verify your profile today.</Text>
      <TouchableOpacity
        style={{
          width: '60%',
          borderRadius: 10,
          borderColor: 'red',
          borderWidth: 2,
          justifyContent: 'center',
          alignContent: 'center',
          marginTop: 15,
        }}>
        <Text
          style={{
            color: 'red',
            padding: 5,
            fontWeight: '700',
            textAlign: 'center',
          }}>
          Complete Profile
        </Text>
      </TouchableOpacity>
    </View>

    <View>
      <FontAwesomeIcon icon={faEllipsisVertical} size={24} />
    </View>
  </View>
);

const Products = ({navigation}) => {
  const [modalstate, setModalstate] = useState(false);
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <View>
          <OlguLightBox>
            <Image
              style={{width: 40, height: 40, borderRadius: 5}}
              source={{uri: 'https://picsum.photos/208'}}
            />
          </OlguLightBox>
        </View>
        <View style={{marginLeft: 15, flex: 2}}>
          <Text style={{fontWeight: '700'}}>Bu Fırsatları kaçırma</Text>

          <Text style={{fontSize: 12, width: '100%'}}>
            Hakkında mesajlaştığın ilan satıldı.Bu benzer ilanlar hala müsaitken
            onlara bir göz at !
          </Text>
        </View>
        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <FontAwesomeIcon icon={faEllipsisVertical} size={24} />
        </View>
      </View>

      <View style={{marginVertical: 15, flexDirection: 'row'}}>
        <View style={{width: 30}}></View>
        <View style={{width: '100%', height: 200}}>
          <Swiper bounces={true}>
            {[...Array(6)].map((a, b) => (
              <View key={b} style={{flexDirection: 'row'}}>
                <OlguLightBox>
                  <Image
                    style={{
                      width: 100,
                      height: 100,
                      borderRadius: 10,
                      marginHorizontal: 10,
                      resizeMode: 'cover',
                    }}
                    source={{uri: `https://picsum.photos/20${b}`}}
                  />
                </OlguLightBox>
                <OlguLightBox>
                  <Image
                    style={{
                      width: 100,
                      height: 100,
                      borderRadius: 10,
                      marginHorizontal: 10,
                      resizeMode: 'cover',
                    }}
                    source={{uri: `https://picsum.photos/20${b + 1}`}}
                  />
                </OlguLightBox>
                <OlguLightBox>
                  <Image
                    style={{
                      width: 100,
                      height: 100,
                      borderRadius: 10,
                      marginHorizontal: 10,
                      resizeMode: 'cover',
                    }}
                    source={{uri: `https://picsum.photos/20${b + 2}`}}
                  />
                </OlguLightBox>
              </View>
            ))}
          </Swiper>
          <TouchableOpacity
            onPress={() => setModalstate(modalstate => true)}
            style={{
              position: 'relative',
              width: 100,
              borderRadius: 18,
              borderColor: 'red',
              borderWidth: 2,
              justifyContent: 'center',
              alignContent: 'center',
              marginBottom: 20,
            }}>
            <Text
              style={{
                color: 'red',
                padding: 5,
                fontWeight: '700',
                textAlign: 'center',
              }}>
              Göz at
            </Text>
          </TouchableOpacity>
          {!!modalstate && (
            <MyModal
              navigation={navigation}
              setModalstate={setModalstate}
              modalstate={modalstate}
            />
          )}
        </View>
      </View>
    </View>
  );
};
const MyModal = ({setModalstate, modalstate, navigation}) => (
  <View
    style={{
      width: 150,
      height: 70,
      padding: 5,
      paddingTop: 20,
      backgroundColor: '#5f27cd',
      position: 'absolute',
      top: -100,
      borderRadius: 5,
    }}>
    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
      <TouchableOpacity onPress={() => setModalstate(modalstate => false)}>
        <FontAwesomeIcon icon={faXmark} style={{color: 'white'}} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          setModalstate(a => false);
          navigation.navigate('DetailCar');
        }}>
        <Text style={{color: 'white'}}>Ana Sayfaya Git</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default NotificationScreen;
