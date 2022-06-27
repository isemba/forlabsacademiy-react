import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { faEllipsis, faPen, faTrash, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Avatar } from 'react-native-paper';

const FirstRoute = () => (
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
            <FontAwesomeIcon icon={faTrashCan} style={{ color: '#757575' }} />
          </View>
        </View>
      </View>
      <View style={[styles.cardBottom]}>
        <TouchableOpacity
          style={{ backgroundColor: '#fff' }}
        >
          <Text style={{ color: '#757575', fontWeight: 'bold' }}>Paylaş</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ backgroundColor: '#fff' }}
        >
          <Text style={{ color: '#ff3f55', fontWeight: 'bold' }}>Sohbet</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

const SecondRoute = () => (
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
);
const ThirdRoute = () => (
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
            <FontAwesomeIcon icon={faEllipsis} style={{ color: '#757575' }} />
          </View>
        </View>
      </View>
      <View style={[styles.cardBottom]}>
        <TouchableOpacity
          style={{ backgroundColor: '#fff' }}
        >
          <Text style={{ color: '#ff3f55', fontWeight: 'bold' }}>Tekrar yayınla</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);
const FourthRoute = () => (
  <View style={[styles.scene]}>
    <View style={[styles.congratzCard]}>
      <Image style={[styles.avatar]}  source={{uri : 'https://w7.pngwing.com/pngs/450/120/png-transparent-cone-with-confetti-illustration-party-popper-computer-icons-celebration-icon-miscellaneous-orange-logo.png'}} />
      <View>
        <Text style={{ fontWeight: 'bold', color: '#757575'}}>Süpersin!</Text>
        <Text style={{ fontSize: 12 }}>İşte bugüne kadar yaptığın tüm satışlar</Text>
      </View>
    </View>
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
            <FontAwesomeIcon icon={faTrashCan} style={{ color: '#757575' }} />
          </View>
        </View>
      </View>
      <View style={[styles.cardBottom]}>
        <TouchableOpacity
          style={{ backgroundColor: '#fff' }}
        >
          <Text style={{ color: '#757575', fontWeight: 'bold' }}>Tekrar satışa çıkar</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);
const renderTabBar = props => (
  <TabBar
    {...props}
    style={{ backgroundColor: 'white', elevation: 0, shadowOffset: { height: 0, width: 0 } }}
    indicatorStyle={{ backgroundColor: '#ff3f55'}}
    renderLabel={({ route, color, focused }) => (
      focused ? <Text style={{ fontWeight: 'bold', color: '#ff3f55' }} >{route.title}</Text>: <Text style={{ fontWeight: 'bold' }} color={'#ccc'} >{route.title}</Text>
     
    )}
  />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
  fourth: FourthRoute
});
const MyListing = () => {

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'Favoriler' },
    { key: 'second', title: 'Satıyor' },
    { key: 'third', title: 'Süresi Dolmuş' },
    { key: 'fourth', title: 'Satıldı' },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      style={styles.container}
      renderTabBar={renderTabBar}
    />
  )
}
const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    padding: 0,
  },
  scene: {
    flex: 1, color: 'pink',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: 20
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
    position: 'relative',
    borderRadius: 6,
    marginBottom: 15
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
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
    marginLeft:10,
    marginRight:10
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
    marginBottom: 15,
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
export default MyListing