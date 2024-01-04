import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {AppColor} from '../../theme/appColor';
import MapView, {Callout, Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {Location, Map, NoteText} from 'iconsax-react-native';
import FlatAction from '../../components/ui/flatAction';
import {NOTEDETAILS, NOTELIST} from '../../utils/routes';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';
import {Text} from 'react-native-svg';
import MarkerCallout from '../../components/maps/markerCallout';
const {width, height} = Dimensions.get('window');

const Home = props => {
  const navigation = useNavigation();
  const [notes, setNotes] = useState([]);
  const [mapType, setMapType] = useState(false);
  const [markerLoc, setMarkerLoc] = useState([]);

  const getNotes = async () => {
    firestore()
      .collection('NOTES')
      .get()
      .then(querySnapshot => {
        const tempData = [];
        querySnapshot.forEach(doc =>
          tempData.push({id: doc.id, ...doc.data()}),
        );
        setNotes(tempData);
      });
  };
  useEffect(() => {
    getNotes();
  }, [notes]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate(NOTELIST, {notes})}
          style={{
            opacity: 0.9,
            position: 'absolute',
            top: 20,
            right: 10,
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
          <NoteText size={30} color={AppColor.BLACK} />
        </TouchableOpacity>
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
        <MapView
          style={styles.map}
          mapType={mapType ? 'hybrid' : 'standard'}
          initialRegion={{
            latitude: 41.05,
            longitude: 28.97,
            latitudeDelta: 0.15,
            longitudeDelta: 0.11,
          }}
          provider={PROVIDER_GOOGLE}
          region={{
            latitude: 41.013891,
            longitude: 28.972817,
          }}>
          {notes.map((marker, index) => (
            <Marker
              key={index}
              coordinate={marker.region}
              //    title={marker.title}
              //   description={marker.description}
              pinColor="blue">
              <Callout
                onPress={() => navigation.navigate(NOTEDETAILS, {item: marker})}
                tooltip={true}>
                <View
                  style={{
                    backgroundColor: 'white',
                    padding: 5,
                    width: 'auto',
                    height: 'auto',
                    alignItems: 'center',
                    borderRadius: 10,
                  }}>
                  <MarkerCallout marker={marker} />
                </View>
              </Callout>
            </Marker>
          ))}
        </MapView>
        <FlatAction {...props} />
      </View>
    </SafeAreaView>
  );
};

export default Home;

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
