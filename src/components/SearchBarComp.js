import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Searchbar} from 'react-native-paper';

const SearchBarComp = () => {
  
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  return (
    <Searchbar
      placeholder="Ara"
      style={{
        width: '60%',
        height: 40,
        borderRadius: 10,
        border: 'none',
        backgroundColor: '#d3d6e8',
      }}
      icon={styles.iconclose}
      inputStyle={{textAlign: 'center'}}
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};

const styles = StyleSheet.create({
  iconclose: {
    display: 'none',
  },
});

export default SearchBarComp;
