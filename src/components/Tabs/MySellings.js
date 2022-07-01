import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, RefreshControl, ScrollView, SafeAreaView } from 'react-native';
import {  faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const MySellings = () => {
  return (
    <View style={[styles.scene]}>
      <View style={[styles.card]}>
        <View style={[styles.cardContent]}>
          <View style={[styles.leftContent]}>
            <Image style={{ width: '100%', height: 60, borderWidth: 2, borderRadius: 10, overflow: 'hidden' }} source={{ uri: 'https://www.donanimhaber.com/images/images/haber/146037/src/macbook-air-2022-yepyeni-bir-tasarimla-gelecek146037_1.jpg' }}></Image>
          </View>
          <View style={[styles.rightContent]}>
            <View>
              <Text style={[styles.price]}>30.000</Text>
              <Text>Macbook 14'</Text>
            </View>
            <View>
              <FontAwesomeIcon icon={faPen} style={{ color: '#757575' }} />
            </View>
          </View>
        </View>
        <View style={[styles.cardBottom2]}>
          <TouchableOpacity
            style={{ backgroundColor: '#fff' }}
          >
            <Text style={{ color: '#f48225', fontWeight: 'bold' }}>Hemen sat</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      marginTop: 0,
      padding: 0,
    },
    scene: {
      flex: 1,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'white',
    },
    card: {
      shadowColor: "#000",
      shadowOffset: {
        width: 1,
        height: 10,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
      backgroundColor: '#fff',
      display: 'flex',
      flexDirection: 'column',
      borderRadius: 6,
      marginRight: 20,
      marginLeft: 20,
      marginBottom: 10,
      marginTop: 10
    },
    cardContent: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 15,
    },
    leftContent: {
      width: '20%',
    },
    rightContent: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '80%',
      height: '100%',
      paddingRight: 10,
      paddingLeft: 10,
  
    },
    cardBottom: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 15,
      borderTopWidth: 0.8,
      borderTopColor: '#ccc',
      marginLeft: 10,
      marginRight: 10
    },
    cardBottom2: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingBottom: 15,
    },
    btnP: {
      backgroundColor: '#fff',
      color: '#ddd'
    },
    btnS: {
      backgroundColor: '#fff',
      color: '#ddd'
    },
    button: {
      backgroundColor: '#000',
      color: 'black'
    },
    price: {
      color: '#2c2c2c',
      fontWeight: 'bold'
    },
    congratzCard: {
      height: 80,
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 6,
      shadowColor: "#000",
      shadowOffset: {
        width: 1,
        height: 10,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
      backgroundColor: '#F5F5F5',
      paddingLeft: 25,
      margin: 20,
      marginBottom: 10
    },
    avatar: {
      width: 60,
      height: 60,
      borderWidth: 2,
      borderRadius: 30,
      overflow: 'hidden',
      marginRight: 10
    }
  
  });
export default MySellings