import React from 'react';
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

const CommentRate = ({points, text}) => {
  return (
    <View style={styles.pointContainer}>
      <Text style={styles.pointStyle}>
        {points} {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  pointContainer: {
    width: 'auto',
    padding: 5,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 20,
    borderColor: '#DDD',
    marginLeft: 10,
    marginBottom: 10,
  },
  pointStyle: {},
});



export default CommentRate;
