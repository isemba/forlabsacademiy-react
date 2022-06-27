import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

const ChatScreen = () => {
  return (
    <View>
      <View style={styles.menu}>
        {/* <Image
          style={styles.logo}
          source={{
            uri: 'https://emojigraph.org/media/joypixels/circled-m_24c2-fe0f.png',
          }}
        /> */}
        <Text style={styles.logo}>M</Text>
        <Text style={{color: '#FF0033', fontSize: 18}}>Filtrele</Text>
      </View>
      <ScrollView>
        <Text>MERHABAAAA</Text>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  menu: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    paddingLeft: 15,
    paddingRight: 20,
    marginTop: 5,
  },
  // logo: {
  //   width: 35,
  //   height: 35,
  // },
  logo: {
    borderRadius: 100,
    fontSize: 15,
    width: 30,
    height: 30,
    paddingLeft: 8,
    paddingTop: 4,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: '#ff69b4',
  },
});
export default ChatScreen;
