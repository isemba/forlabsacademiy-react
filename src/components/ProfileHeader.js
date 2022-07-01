import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
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
import CommentRate from './CommentRate';
import { color } from 'react-native-reanimated';

const ProfileHeader = ({prps}) => {
  return (
    <View style={styles.commentContainer}>
      <View style={styles.profileImgbox}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <View style={{display: 'flex', marginLeft: 15}}>
          <Text style={{fontSize: 10, fontWeight: 'bold', color: '#000'}}>
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
              size={10}
              style={{color: '#ffcc5c'}}
            />
            <FontAwesomeIcon
              icon={faStar}
              size={10}
              style={{color: '#ffcc5c'}}
            />
            <FontAwesomeIcon
              icon={faStar}
              size={10}
              style={{color: '#ffcc5c'}}
            />
            <FontAwesomeIcon
              icon={faStar}
              size={10}
              style={{color: '#ffcc5c'}}
            />
            <FontAwesomeIcon
              icon={faStar}
              size={10}
              style={{color: '#ffcc5c'}}
            />
            <Text
              style={{
                marginLeft: 10,
                fontWeight: '500',
                fontSize: 16,
              }}>
              
            </Text>
          </View>
        </View>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
    commentContainer:{
        position:'absolute',
        top:-10,
        left:50,

    }
    ,profileImgbox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    
  },
  tinyLogo: {
    width: 30,
    height: 30,
    borderRadius: 25,
  },
});

export default ProfileHeader;
