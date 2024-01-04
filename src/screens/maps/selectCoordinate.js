import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import {AppColor} from '../../theme/appColor';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {ArrowCircleRight2, Map, Translate} from 'iconsax-react-native';
import CustomMarker from '../../components/maps/customMarker';
import {useNavigation} from '@react-navigation/native';
import {ADDNOTE} from '../../utils/routes';
const {width, height} = Dimensions.get('window');

const SelectCoordinate = props => {
  const navigation = useNavigation();
  const [mapType, setMapType] = useState(false);
  const [coordinate, setCoordinate] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <TouchableOpacity
          onPress={() => setMapType(!mapType)}
          style={{
            opacity: 0.9,
            position: 'absolute',
            left: 20,
            top: 10,
            width: 60,
            height: 60,
            zIndex: 99,
            backgroundColor: AppColor.WHITE,
            borderRadius: 200,
            justifyContent: 'center',
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            elevation: 9,
          }}>
          <Map size={30} color={AppColor.BLACK} />
        </TouchableOpacity>
        <TouchableOpacity
          disabled={!coordinate}
          onPress={() => navigation.navigate(ADDNOTE, {coordinate: coordinate})}
          style={{
            opacity: 0.9,
            position: 'absolute',
            bottom: 20,
            right: 10,
            width: 60,
            height: 60,
            zIndex: 99,
            backgroundColor: `${!coordinate ? 'lightgray' : AppColor.BLUE}`,
            borderRadius: 200,
            justifyContent: 'center',
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            elevation: 9,
          }}>
          <ArrowCircleRight2 size={30} color={AppColor.WHITE} />
        </TouchableOpacity>
        <MapView
          onPress={e => setCoordinate(e.nativeEvent.coordinate)}
          style={styles.map}
          mapType={mapType ? 'hybrid' : 'standard'}
          initialRegion={{
            latitude: 41.05,
            longitude: 28.97,
            latitudeDelta: 0.09,
            longitudeDelta: 0.04,
          }}
          provider={PROVIDER_GOOGLE}
          region={{
            latitude: 41.013891,
            longitude: 28.972817,
          }}>
          {coordinate && <Marker coordinate={coordinate}></Marker>}
        </MapView>
      </View>
    </SafeAreaView>
  );
};

export default SelectCoordinate;

const styles = StyleSheet.create({
  map: {
    height: height,
    width: width,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  container: {
    flex: 1,
  },
});
