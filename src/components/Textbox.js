import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Textbox = ({titleLeft, titleRight}) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        marginTop: 5,
        marginBottom: 10,
      }}>
      <Text style={{color: '#111111', fontSize: 20, fontWeight: '700'}}>
        {titleLeft}
      </Text>
      <Text style={{fontSize: 15, color: '#ff1f84', fontWeight: '600'}}>
        {titleRight}
      </Text>
    </View>
  );
};

export default Textbox;
