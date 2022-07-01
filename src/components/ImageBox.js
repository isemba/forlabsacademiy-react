import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
const ImageBox = ({link, size}) => {
  return (
    <View style={styles.view}>
      <Image
        style={size == 'tiny' ? styles.tiny : styles.big}
        source={{
          uri: link,
        }}
      />
      <FontAwesomeIcon
        icon={faHeart}
        style={styles.icon}
        size={25}></FontAwesomeIcon>
    </View>
  );
};
const styles = StyleSheet.create({
  tiny: {
    width: 100,
    height: 100,
    borderRadius: 16,
    marginRight: 20,
    opacity: 0.9,
  },
  big: {
    width: 180,
    height: 180,
    borderRadius: 16,
    marginRight: 20,
    opacity: 0.9,
  },
  view: {
    position: 'relative',
  },
  icon: {
    position: 'absolute',
    bottom: 10,
    right: 35,
    color: '#ede8d5',
  },
});
export default ImageBox;
