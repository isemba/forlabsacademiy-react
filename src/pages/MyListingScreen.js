import React, { useState, useCallback } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, RefreshControl, ScrollView, SafeAreaView } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { faEllipsis, faPen, faTrash, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Avatar } from 'react-native-paper';
import Popup from '../components/Popup';
import Sold from '../components/Tabs/Sold';
import Expired from '../components/Tabs/Expired';
import MySellings from '../components/Tabs/MySellings';
import MyFavorites from '../components/Tabs/MyFavorites';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const FirstRoute = () => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />}>
        <MyFavorites></MyFavorites>
      </ScrollView>
    </SafeAreaView>
  )
};

const SecondRoute = () => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />}>
        <MySellings></MySellings>
      </ScrollView>
    </SafeAreaView>
  )
};
const ThirdRoute = () => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />}>
        <Expired></Expired>
      </ScrollView>
    </SafeAreaView>
  )
};
const FourthRoute = () => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />}>
        <Sold></Sold>
      </ScrollView>
    </SafeAreaView>
  )
};

const renderTabBar = props => (

  <TabBar
    {...props}
    style={{ backgroundColor: 'white', elevation: 0, shadowOffset: { height: 0, width: 0 }, height: 40 }}
    indicatorStyle={{ backgroundColor: '#ff3f55' }}
    pressColor={'#D3D3D3'}
    renderLabel={({ route, color, focused }) => (
      focused ? <Text style={{ fontWeight: 'bold', color: '#ff3f55' }} >{route.title}</Text> : <Text style={{ fontWeight: 'bold', width: '100%', alignItems: 'center', height: '100%', justifyContent: 'flex-start' }} color={'#ccc'} >{route.title}</Text>

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
    backgroundColor: '#fff'
  },
  scrollView: {
    backgroundColor: '#ffffff',
  },
});
export default MyListing