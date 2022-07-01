import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PagerView from 'react-native-pager-view';

export default  MyPager = ({children}) => {
  return (
    <PagerView style={styles.pagerView} initialPage={1} collapsable={false}   >
       
        {children}
      
       
    </PagerView>
  );
};

const styles = StyleSheet.create({
  pagerView: {
    
    borderWidth:3,borderColor:"red",
    
    
  
  },
});