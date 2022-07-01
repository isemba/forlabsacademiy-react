import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';
import ImageBox from '../components/ImageBox';
import Textbox from '../components/Textbox';
import ModalComp from '../components/ModalComp';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import SearchBarComp from '../components/SearchBarComp';
const DetailScreenElectronic = ({navigation}) => {
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
        <SearchBarComp/>
        <Text style={{color: '#FF0033', fontSize: 18}}>Filtrele (1)</Text>
      </View>

      <ModalComp />

      <ScrollView horizontal={true}>
        <ImageBox
          link="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-se-family-select-202203_GEO_EMEA?wid=940&hei=1112&fmt=jpeg&qlt=90&.v=1646070492835"
          size="tiny"
        />
        <ImageBox
          link="https://cdn.akakce.com/jbl/jbl-jr310bt-kablosuz-kulak-ustu-cocuk-z.jpg"
          size="tiny"
        />
        <ImageBox
          link="https://m.media-amazon.com/images/I/81qpdeKzdmS.jpg"
          size="tiny"
        />
        <ImageBox
          link="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-se-family-select-202203_GEO_EMEA?wid=940&hei=1112&fmt=jpeg&qlt=90&.v=1646070492835"
          size="tiny"
        />
        <ImageBox
          link="https://cdn.akakce.com/jbl/jbl-jr310bt-kablosuz-kulak-ustu-cocuk-z.jpg"
          size="tiny"
        />
        <ImageBox
          link="https://m.media-amazon.com/images/I/81qpdeKzdmS.jpg"
          size="tiny"
        />
        <ImageBox
          link="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-se-family-select-202203_GEO_EMEA?wid=940&hei=1112&fmt=jpeg&qlt=90&.v=1646070492835"
          size="tiny"
        />
        <ImageBox
          link="https://cdn.akakce.com/jbl/jbl-jr310bt-kablosuz-kulak-ustu-cocuk-z.jpg"
          size="tiny"
        />
        <ImageBox
          link="https://m.media-amazon.com/images/I/81qpdeKzdmS.jpg"
          size="tiny"
        />
      </ScrollView>
      <Textbox titleLeft="Arama Sonuçları(14312)" />
      <View style={{display: 'flex', flexDirection: 'row', marginBottom: 20}}>
        <ImageBox
          link="https://ichef.bbci.co.uk/news/640/cpsprodpb/172DF/production/_108634949_056274859-1.jpg"
          size="big"
        />
        <ImageBox
          link="https://koctas-img.mncdn.com/mnresize/600/600/productimages/1000387156/1000387156_4_MC/8822252666930_1579250260871.jpg"
          size="big"
        />
      </View>
      <View style={{display: 'flex', flexDirection: 'row', marginBottom: 20}}>
        <ImageBox
          link="https://i2.milimaj.com/i/milliyet/75/0x0/5db4b3f25542840c98c0f892.jpg"
          size="big"
        />
        <ImageBox
          link="http://www.markaevinde.com/Uploads/UrunResimleri/buyuk/Arcelik-BEU3924-Buharli-Utu-0649.png"
          size="big"
        />
      </View>
      <View style={{display: 'flex', flexDirection: 'row', marginBottom: 20}}>
        <ImageBox
          link="https://ichef.bbci.co.uk/news/640/cpsprodpb/172DF/production/_108634949_056274859-1.jpg"
          size="big"
        />
        <ImageBox
          link="https://koctas-img.mncdn.com/mnresize/600/600/productimages/1000387156/1000387156_4_MC/8822252666930_1579250260871.jpg"
          size="big"
        />
      </View>
      <View style={{display: 'flex', flexDirection: 'row', marginBottom: 20}}>
        <ImageBox
          link="https://i2.milimaj.com/i/milliyet/75/0x0/5db4b3f25542840c98c0f892.jpg"
          size="big"
        />
        <ImageBox
          link="http://www.markaevinde.com/Uploads/UrunResimleri/buyuk/Arcelik-BEU3924-Buharli-Utu-0649.png"
          size="big"
        />
      </View>
      <View style={{display: 'flex', flexDirection: 'row', marginBottom: 20}}>
        <ImageBox
          link="https://ichef.bbci.co.uk/news/640/cpsprodpb/172DF/production/_108634949_056274859-1.jpg"
          size="big"
        />
        <ImageBox
          link="https://koctas-img.mncdn.com/mnresize/600/600/productimages/1000387156/1000387156_4_MC/8822252666930_1579250260871.jpg"
          size="big"
        />
      </View>
      <View style={{display: 'flex', flexDirection: 'row', marginBottom: 20}}>
        <ImageBox
          link="https://i2.milimaj.com/i/milliyet/75/0x0/5db4b3f25542840c98c0f892.jpg"
          size="big"
        />
        <ImageBox
          link="http://www.markaevinde.com/Uploads/UrunResimleri/buyuk/Arcelik-BEU3924-Buharli-Utu-0649.png"
          size="big"
        />
      </View>
      <View style={{display: 'flex', flexDirection: 'row', marginBottom: 20}}>
        <ImageBox
          link="https://ichef.bbci.co.uk/news/640/cpsprodpb/172DF/production/_108634949_056274859-1.jpg"
          size="big"
        />
        <ImageBox
          link="https://koctas-img.mncdn.com/mnresize/600/600/productimages/1000387156/1000387156_4_MC/8822252666930_1579250260871.jpg"
          size="big"
        />
      </View>
      <View style={{display: 'flex', flexDirection: 'row', marginBottom: 20}}>
        <ImageBox
          link="https://i2.milimaj.com/i/milliyet/75/0x0/5db4b3f25542840c98c0f892.jpg"
          size="big"
        />
        <ImageBox
          link="http://www.markaevinde.com/Uploads/UrunResimleri/buyuk/Arcelik-BEU3924-Buharli-Utu-0649.png"
          size="big"
        />
      </View>
      <View style={{display: 'flex', flexDirection: 'row', marginBottom: 20}}>
        <ImageBox
          link="https://ichef.bbci.co.uk/news/640/cpsprodpb/172DF/production/_108634949_056274859-1.jpg"
          size="big"
        />
        <ImageBox
          link="https://koctas-img.mncdn.com/mnresize/600/600/productimages/1000387156/1000387156_4_MC/8822252666930_1579250260871.jpg"
          size="big"
        />
      </View>
      <View style={{display: 'flex', flexDirection: 'row', marginBottom: 20}}>
        <ImageBox
          link="https://i2.milimaj.com/i/milliyet/75/0x0/5db4b3f25542840c98c0f892.jpg"
          size="big"
        />
        <ImageBox
          link="http://www.markaevinde.com/Uploads/UrunResimleri/buyuk/Arcelik-BEU3924-Buharli-Utu-0649.png"
          size="big"
        />
      </View>
      <View style={{display: 'flex', flexDirection: 'row', marginBottom: 20}}>
        <ImageBox
          link="https://ichef.bbci.co.uk/news/640/cpsprodpb/172DF/production/_108634949_056274859-1.jpg"
          size="big"
        />
        <ImageBox
          link="https://koctas-img.mncdn.com/mnresize/600/600/productimages/1000387156/1000387156_4_MC/8822252666930_1579250260871.jpg"
          size="big"
        />
      </View>
      <View style={{display: 'flex', flexDirection: 'row', marginBottom: 20}}>
        <ImageBox
          link="https://i2.milimaj.com/i/milliyet/75/0x0/5db4b3f25542840c98c0f892.jpg"
          size="big"
        />
        <ImageBox
          link="http://www.markaevinde.com/Uploads/UrunResimleri/buyuk/Arcelik-BEU3924-Buharli-Utu-0649.png"
          size="big"
        />
      </View>
      <View style={{display: 'flex', flexDirection: 'row', marginBottom: 20}}>
        <ImageBox
          link="https://ichef.bbci.co.uk/news/640/cpsprodpb/172DF/production/_108634949_056274859-1.jpg"
          size="big"
        />
        <ImageBox
          link="https://koctas-img.mncdn.com/mnresize/600/600/productimages/1000387156/1000387156_4_MC/8822252666930_1579250260871.jpg"
          size="big"
        />
      </View>
      <View style={{display: 'flex', flexDirection: 'row', marginBottom: 20}}>
        <ImageBox
          link="https://i2.milimaj.com/i/milliyet/75/0x0/5db4b3f25542840c98c0f892.jpg"
          size="big"
        />
        <ImageBox
          link="http://www.markaevinde.com/Uploads/UrunResimleri/buyuk/Arcelik-BEU3924-Buharli-Utu-0649.png"
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
export default DetailScreenElectronic;
