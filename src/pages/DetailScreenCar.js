import React, {useState} from 'react';
import {Searchbar} from 'react-native-paper';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import ImageBox from '../components/ImageBox';
import Textbox from '../components/Textbox';
import ModalComp from '../components/ModalComp';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
const DetailScreenCar = ({navigation}) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  return (
    <ScrollView>
      <View style={styles.menu}>
        <TouchableHighlight
          underlayColor={'transparent'}
          onPress={() => navigation.goBack()}>
          <View>
            <FontAwesomeIcon icon={faArrowLeft} size={25} color={'gray'} />
          </View>
        </TouchableHighlight>
        <Searchbar
          placeholder="Ara"
          style={{
            width: '60%',
            height: 38,
            borderRadius: 10,
            border: 'none',
            backgroundColor: '#d3d6e8',
            paddingLeft: '15%',
          }}
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
        <Text style={{color: '#FF0033', fontSize: 18}}>Filtrele (1)</Text>
      </View>

      <ModalComp />

      <ScrollView horizontal={true}>
        <ImageBox
          link="https://arabam-blog.mncdn.com/wp-content/uploads/2021/05/Crop800x600-7-1.jpg"
          size="tiny"
        />
        <ImageBox
          link="https://arabam-blog.mncdn.com/wp-content/uploads/2021/05/Crop800x600-7-1.jpg"
          size="tiny"
        />
        <ImageBox
          link="https://arabam-blog.mncdn.com/wp-content/uploads/2021/05/Crop800x600-7-1.jpg"
          size="tiny"
        />
        <ImageBox
          link="https://arabam-blog.mncdn.com/wp-content/uploads/2021/05/Crop800x600-7-1.jpg"
          size="tiny"
        />
        <ImageBox
          link="https://arabam-blog.mncdn.com/wp-content/uploads/2021/05/Crop800x600-7-1.jpg"
          size="tiny"
        />
        <ImageBox
          link="https://arabam-blog.mncdn.com/wp-content/uploads/2021/05/Crop800x600-7-1.jpg"
          size="tiny"
        />
        <ImageBox
          link="https://arabam-blog.mncdn.com/wp-content/uploads/2021/05/Crop800x600-7-1.jpg"
          size="tiny"
        />
      </ScrollView>
      <Textbox titleLeft="Arama Sonuçları(14312)" />
      <View style={{display: 'flex', flexDirection: 'row', marginBottom: 20}}>
        <ImageBox
          link="https://cdn.euroncap.com/media/17621/press_pic_hyundai_i20-media-gallery.jpg?mode=crop&width=359&height=235"
          size="big"
        />
        <ImageBox
          link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj4QKeEJBDqakk5cOrsoEPwi48bYdRfBhQzYBv3U055fn0qKFNkQWSZyKGYo7Ef1u5ySY&usqp=CAU"
          size="big"
        />
      </View>
      <View style={{display: 'flex', flexDirection: 'row', marginBottom: 20}}>
        <ImageBox
          link="https://img.indianautosblog.com/2021/06/02/2021-skoda-octavia-front-quarter-6cfd.jpg"
          size="big"
        />
        <ImageBox
          link="https://cdn-jaguarlandrover.com/api/v1/image/24243/w/1000.jpg"
          size="big"
        />
      </View>
      <View style={{display: 'flex', flexDirection: 'row', marginBottom: 20}}>
        <ImageBox
          link="https://cdn.euroncap.com/media/17621/press_pic_hyundai_i20-media-gallery.jpg?mode=crop&width=359&height=235"
          size="big"
        />
        <ImageBox
          link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj4QKeEJBDqakk5cOrsoEPwi48bYdRfBhQzYBv3U055fn0qKFNkQWSZyKGYo7Ef1u5ySY&usqp=CAU"
          size="big"
        />
      </View>
      <View style={{display: 'flex', flexDirection: 'row', marginBottom: 20}}>
        <ImageBox
          link="https://img.indianautosblog.com/2021/06/02/2021-skoda-octavia-front-quarter-6cfd.jpg"
          size="big"
        />
        <ImageBox
          link="https://cdn-jaguarlandrover.com/api/v1/image/24243/w/1000.jpg"
          size="big"
        />
      </View>
      <View style={{display: 'flex', flexDirection: 'row', marginBottom: 20}}>
        <ImageBox
          link="https://cdn.euroncap.com/media/17621/press_pic_hyundai_i20-media-gallery.jpg?mode=crop&width=359&height=235"
          size="big"
        />
        <ImageBox
          link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj4QKeEJBDqakk5cOrsoEPwi48bYdRfBhQzYBv3U055fn0qKFNkQWSZyKGYo7Ef1u5ySY&usqp=CAU"
          size="big"
        />
      </View>
      <View style={{display: 'flex', flexDirection: 'row', marginBottom: 20}}>
        <ImageBox
          link="https://img.indianautosblog.com/2021/06/02/2021-skoda-octavia-front-quarter-6cfd.jpg"
          size="big"
        />
        <ImageBox
          link="https://cdn-jaguarlandrover.com/api/v1/image/24243/w/1000.jpg"
          size="big"
        />
      </View>
      <View style={{display: 'flex', flexDirection: 'row', marginBottom: 20}}>
        <ImageBox
          link="https://cdn.euroncap.com/media/17621/press_pic_hyundai_i20-media-gallery.jpg?mode=crop&width=359&height=235"
          size="big"
        />
        <ImageBox
          link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj4QKeEJBDqakk5cOrsoEPwi48bYdRfBhQzYBv3U055fn0qKFNkQWSZyKGYo7Ef1u5ySY&usqp=CAU"
          size="big"
        />
      </View>
      <View style={{display: 'flex', flexDirection: 'row', marginBottom: 20}}>
        <ImageBox
          link="https://img.indianautosblog.com/2021/06/02/2021-skoda-octavia-front-quarter-6cfd.jpg"
          size="big"
        />
        <ImageBox
          link="https://cdn-jaguarlandrover.com/api/v1/image/24243/w/1000.jpg"
          size="big"
        />
      </View>
      <View style={{display: 'flex', flexDirection: 'row', marginBottom: 20}}>
        <ImageBox
          link="https://cdn.euroncap.com/media/17621/press_pic_hyundai_i20-media-gallery.jpg?mode=crop&width=359&height=235"
          size="big"
        />
        <ImageBox
          link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj4QKeEJBDqakk5cOrsoEPwi48bYdRfBhQzYBv3U055fn0qKFNkQWSZyKGYo7Ef1u5ySY&usqp=CAU"
          size="big"
        />
      </View>
      <View style={{display: 'flex', flexDirection: 'row', marginBottom: 20}}>
        <ImageBox
          link="https://img.indianautosblog.com/2021/06/02/2021-skoda-octavia-front-quarter-6cfd.jpg"
          size="big"
        />
        <ImageBox
          link="https://cdn-jaguarlandrover.com/api/v1/image/24243/w/1000.jpg"
          size="big"
        />
      </View>
      <View style={{display: 'flex', flexDirection: 'row', marginBottom: 20}}>
        <ImageBox
          link="https://cdn.euroncap.com/media/17621/press_pic_hyundai_i20-media-gallery.jpg?mode=crop&width=359&height=235"
          size="big"
        />
        <ImageBox
          link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj4QKeEJBDqakk5cOrsoEPwi48bYdRfBhQzYBv3U055fn0qKFNkQWSZyKGYo7Ef1u5ySY&usqp=CAU"
          size="big"
        />
      </View>
      <View style={{display: 'flex', flexDirection: 'row', marginBottom: 20}}>
        <ImageBox
          link="https://img.indianautosblog.com/2021/06/02/2021-skoda-octavia-front-quarter-6cfd.jpg"
          size="big"
        />
        <ImageBox
          link="https://cdn-jaguarlandrover.com/api/v1/image/24243/w/1000.jpg"
          size="big"
        />
      </View>
      <View style={{display: 'flex', flexDirection: 'row', marginBottom: 20}}>
        <ImageBox
          link="https://cdn.euroncap.com/media/17621/press_pic_hyundai_i20-media-gallery.jpg?mode=crop&width=359&height=235"
          size="big"
        />
        <ImageBox
          link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj4QKeEJBDqakk5cOrsoEPwi48bYdRfBhQzYBv3U055fn0qKFNkQWSZyKGYo7Ef1u5ySY&usqp=CAU"
          size="big"
        />
      </View>
      <View style={{display: 'flex', flexDirection: 'row', marginBottom: 20}}>
        <ImageBox
          link="https://img.indianautosblog.com/2021/06/02/2021-skoda-octavia-front-quarter-6cfd.jpg"
          size="big"
        />
        <ImageBox
          link="https://cdn-jaguarlandrover.com/api/v1/image/24243/w/1000.jpg"
          size="big"
        />
      </View>
    </ScrollView>
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
export default DetailScreenCar;
