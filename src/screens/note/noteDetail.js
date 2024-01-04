import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import NoteCard from '../../components/notes/noteCard';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
const {width, height} = Dimensions.get('window');

const NoteDetail = ({route}) => {
  const item = route.params.item;
  console.log(item);
  return (
    <View style={styles.container}>
      <NoteCard item={item} />

      <View style={{flex: 1}}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: item?.region?.latitude || 41.013891, // Varsayılan değer
            longitude: item?.region?.longitude || 28.972817, // Varsayılan değer
            latitudeDelta: 0.15,
            longitudeDelta: 0.13,
          }}>
          <Marker coordinate={item.region}></Marker>
        </MapView>
      </View>
    </View>
  );
};

export default NoteDetail;

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
