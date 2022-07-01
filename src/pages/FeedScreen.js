import * as React from 'react';
import {Colors, Searchbar} from 'react-native-paper';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  RefreshControl,
} from 'react-native';
import Circlebox from '../components/Circlebox';
import {
  faCar,
  faTelevision,
  faCouch,
  faTShirt,
  faBiking,
  faHammer,
  faBasketball,
  faHeadphones,
  faGamepad,
  faBabyCarriage,
} from '@fortawesome/free-solid-svg-icons';
import ImageBox from '../components/ImageBox';
import Textbox from '../components/Textbox';
import ModalComp from '../components/ModalComp';
import ProfileScreen from './ProfileScreen';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const FeedScreen = ({navigation}) => {
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  return (
    <ScrollView
      style={{marginLeft: 10, marginRight: 10}}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={styles.menu}>
        <TouchableHighlight
          underlayColor={'transparent'}>
          <ProfileScreen navigation={navigation} />
        </TouchableHighlight>

        <Searchbar
          placeholder="Ara"
          style={{
            width: '60%',
            height: 40,
            borderRadius: 10,
            border: 'none',
            backgroundColor: '#d3d6e8',
          }}
          inputStyle={{textAlign: 'center'}}
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
        <Text style={{color: '#FF0033', fontSize: 18}}>Filtrele</Text>
      </View>
      <ModalComp />
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <TouchableHighlight
          underlayColor={'transparent'}
          onPress={() => navigation.navigate('DetailCar')}>
          <View>
            <Circlebox bg="#99CC99" icon={faCar}></Circlebox>
            <Text style={{textAlign: 'center', marginTop: 10}}>Araba</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor={'transparent'}
          onPress={() => navigation.navigate('DetailElectronic')}>
          <View>
            <Circlebox bg="#6699CC" icon={faTelevision}></Circlebox>
            <Text style={{textAlign: 'center', marginTop: 10}}>Elektronik</Text>
          </View>
        </TouchableHighlight>

        <View>
          <Circlebox bg="#ff8717" icon={faBiking}></Circlebox>
          <Text style={{textAlign: 'center', marginTop: 10}}>
            Diğer Araçlar
          </Text>
        </View>
        <View>
          <Circlebox bg="#FF9999" icon={faTShirt}></Circlebox>
          <Text style={{textAlign: 'center', marginTop: 10}}>
            Giyim ve{'\n'} Aksesuar
          </Text>
        </View>
        <View>
          <Circlebox bg="#00CCCC" icon={faCouch}></Circlebox>
          <Text style={{textAlign: 'center', marginTop: 10}}>Ev Eşyaları</Text>
        </View>
        <View>
          <Circlebox bg="#FF9966" icon={faBabyCarriage}></Circlebox>
          <Text style={{textAlign: 'center', marginTop: 10}}>
            Bebek ve{'\n'} Çocuk
          </Text>
        </View>
        <View>
          <Circlebox bg="#663366" icon={faBasketball}></Circlebox>
          <Text style={{textAlign: 'center', marginTop: 10}}>
            Spor ve {'\n'} Outdoor
          </Text>
        </View>
        <View>
          <Circlebox bg="#21b5ff" icon={faHeadphones}></Circlebox>
          <Text style={{textAlign: 'center', marginTop: 10}}>
            Film, Kitap {'\n'} ve Müzik
          </Text>
        </View>
        <View>
          <Circlebox bg="#ffea00" icon={faGamepad}></Circlebox>
          <Text style={{textAlign: 'center', marginTop: 10}}>Oyun</Text>
        </View>
        <View>
          <Circlebox bg="#c940ff" icon={faHammer}></Circlebox>
          <Text style={{textAlign: 'center', marginTop: 10}}>
            Bahçe ve {'\n'} Hırdavat
          </Text>
        </View>
      </ScrollView>
      <Textbox titleLeft="Vitrin İlanları" titleRight="Hepsini Gör" />
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <ImageBox
          link="https://i0.wp.com/shiftdelete.net/wp-content/uploads/2021/10/asgari-ucretle-alinabilecek-telefonlar-10.jpg?fit=1280%2C720&ssl=1"
          size="tiny"
        />
        <ImageBox
          link="https://www.sinpas.com.tr/assets/cms/ContentImages/cf79d68a-fd10-4503-baeb-926aaf3fc365.png"
          size="tiny"
        />
        <ImageBox
          link="https://cdn.akakce.com/z/dell/dell-latitude-3520-i7-1165g7-8gb-256gb-ssd-15-6-fhd-ubuntu-n027l352015emea-u.jpg"
          size="tiny"
        />
        <ImageBox
          link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgEN8P-HOFOHIGcP6d81yh_1HCz7JhbNnB4Q&usqp=CAU"
          size="tiny"
        />
        <ImageBox
          link="https://arabam-blog.mncdn.com/wp-content/uploads/2021/05/Crop800x600-7-1.jpg"
          size="tiny"
        />
        <ImageBox
          link="https://www.3dmaxworld.com/Library/Upl/Photo/72424.jpg"
          size="tiny"
        />
        <ImageBox
          link="https://cdn.shopify.com/s/files/1/0543/5192/1329/products/10AM_FEAROF_GREEN_2_300x300.png?v=1653406009"
          size="tiny"
        />
        <ImageBox
          link="https://www.kostebek.com.tr/productimages/115888/middle/33_.jpg"
          size="tiny"
        />
        <ImageBox
          link="https://cdn.shopify.com/s/files/1/0543/5192/1329/products/10AM101588_300x300.jpg?v=1655739525"
          size="tiny"
        />
      </ScrollView>
      <Textbox titleLeft="Şefkat Mahallesi" titleRight="Düzelt" />
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <ImageBox
          link="https://pazarlamasyon.com/wp-content/uploads/2021/04/ikea-jeans1-e1618223540842.jpeg"
          size="big"
        />
        <ImageBox
          link="https://cdn.euroncap.com/media/17621/press_pic_hyundai_i20-media-gallery.jpg?mode=crop&width=359&height=235"
          size="big"
        />
      </View>
      <View style={{display: 'flex', flexDirection: 'row', marginTop: 20}}>
        <ImageBox
          link="https://images.gardrops.com/uploads/2689395/user_items/268939524-s1-file-5ffddd804184c.jpeg"
          size="big"
        />
        <ImageBox
          link="https://www.cnet.com/a/img/resize/e3b9d18c2edab50ad07bc5f8ec1b63072baa2a01/2021/10/23/80425069-0d3e-4c67-9085-a66e6177fc60/macbook-pro-2021-cnet-review-12.jpg?auto=webp&width=940"
          size="big"
        />
      </View>
      <View style={{display: 'flex', flexDirection: 'row', marginTop: 20}}>
        <ImageBox
          link="https://www.mobilyadekorasyonmodeli.com/wp-content/uploads/2015/11/ikea-siyah-mutfak-masa-sandalye-seti-tarendo-adde-700x525.jpg"
          size="big"
        />
        <ImageBox
          link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwHwv-nD3NcUGm2f2CJh1nG6Ruv-UFwcewkA&usqp=CAU"
          size="big"
        />
      </View>
      <View style={{display: 'flex', flexDirection: 'row', marginTop: 20}}>
        <ImageBox
          link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFLxdQ6WAZeezwA3aVv5zX-8cpLnY51Ntc6Q&usqp=CAU"
          size="big"
        />
        <ImageBox
          link="https://renaultfiyat.com/assets/img/campaign/2021-03/kampanya-02.jpg"
          size="big"
        />
      </View>
      <View style={{display: 'flex', flexDirection: 'row', marginTop: 20}}>
        <ImageBox
          link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv4qOypWmrtVHz0eCeENVeRBrgEJ8JKxIqqQ&usqp=CAU"
          size="big"
        />
        <ImageBox
          link="https://productimages.hepsiburada.net/s/216/600-800/110000194572261.jpg"
          size="big"
        />
      </View>
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <ImageBox
          link="https://pazarlamasyon.com/wp-content/uploads/2021/04/ikea-jeans1-e1618223540842.jpeg"
          size="big"
        />
        <ImageBox
          link="https://cdn.euroncap.com/media/17621/press_pic_hyundai_i20-media-gallery.jpg?mode=crop&width=359&height=235"
          size="big"
        />
      </View>
      <View style={{display: 'flex', flexDirection: 'row', marginTop: 20}}>
        <ImageBox
          link="https://www.mobilyadekorasyonmodeli.com/wp-content/uploads/2015/11/ikea-siyah-mutfak-masa-sandalye-seti-tarendo-adde-700x525.jpg"
          size="big"
        />
        <ImageBox
          link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwHwv-nD3NcUGm2f2CJh1nG6Ruv-UFwcewkA&usqp=CAU"
          size="big"
        />
      </View>
      <View style={{display: 'flex', flexDirection: 'row', marginTop: 20}}>
        <ImageBox
          link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWeoOwOnLosrlau94gW13ubyJJ1YPt7eFc9Q&usqp=CAU"
          size="big"
        />
        <ImageBox
          link="http://www.cabani.com.tr/Uploads/UrunResimleri/buyuk/cabani-uniseks-yunlu-bere-12045-d-2e11.jpg"
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
export default FeedScreen;
