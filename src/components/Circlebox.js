import React from 'react';
import {View, Text} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
const Circlebox = ({bg, icon}) => {
  return (
    <View
      style={{
        padding: 15,
        borderRadius: 50,
        marginRight: 18,
        marginLeft: 18,
        backgroundColor: bg,
      }}>
      <FontAwesomeIcon icon={icon} size={25} style={{color: 'white'}} />
    </View>
  );
};

export default Circlebox;
