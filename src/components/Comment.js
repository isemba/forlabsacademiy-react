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

const Comment = ({commentrate}) => {
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
          <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
            İSİM S. <Text style>satıcı</Text>
          </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginTop: 7,
            }}>
            <FontAwesomeIcon
              icon={faStar}
              size={15}
              style={{color: '#ffcc5c'}}
            />
            <FontAwesomeIcon
              icon={faStar}
              size={15}
              style={{color: '#ffcc5c'}}
            />
            <FontAwesomeIcon
              icon={faStar}
              size={15}
              style={{color: '#ffcc5c'}}
            />
            <FontAwesomeIcon
              icon={faStar}
              size={15}
              style={{color: '#ffcc5c'}}
            />
            <FontAwesomeIcon
              icon={faStar}
              size={15}
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
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginTop: 10,
        }}>
        {commentrate}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    commentContainer:{
        marginTop:10,
        borderBottomWidth:1,
        borderBottomColor:'#DDD',
        paddingTop:10,
        paddingBottom:10

    }
    ,profileImgbox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    
  },
  tinyLogo: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
});

export default Comment;
