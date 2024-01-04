import {
  ActivityIndicator,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';
import CustomTextInput from '../../components/ui/CustomTextInput';
import CustomButton from '../../components/ui/CustomButton';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {HOME} from '../../utils/routes';
const {width, height} = Dimensions.get('window');

const EditNote = ({route}) => {
  const id = route.params.id;
  const date = new Date();
  const navigation = useNavigation();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [newCoordinate, setNewCoordinate] = useState(note?.region);
  const [note, setNote] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getNotes();
  }, [handlePress]);

  //GET DATA
  const getNotes = async () => {
    const querySnapshot = await firestore().collection('NOTES').get();
    const tempData = [];
    querySnapshot.forEach(doc => tempData.push({id: doc.id, ...doc.data()}));
    const handleData = tempData.find(item => item.id === id);
    setNote(handleData);
    setLoading(handleData.region);
    setNewCoordinate(handleData.region);
    setTitle(handleData.title);
    setDescription(handleData.description);
  };

  //UPDATE DATA
  const handlePress = () => {
    const editForm = {
      date: date.toLocaleString(),
      title: title,
      description: description,
      region: newCoordinate,
    };
    console.log(editForm);
    firestore()
      .collection('NOTES')
      .doc(id)
      .update(editForm)
      .then(() => {
        console.log('NOTE updated!');
      });
    navigation.navigate(HOME);
  };

  return (
    <SafeAreaView>
      {/* INPUT */}
      <View>
        <CustomTextInput
          placeHolder={'Başlık'}
          defaultText={note?.title}
          onChangeText={text => setTitle(text)}
        />
        <CustomTextInput
          placeHolder={'Açıklama'}
          defaultText={note?.description}
          onChangeText={text => setDescription(text)}
        />
        <CustomButton
          disabled={false}
          title={'Düzenle'}
          onPress={handlePress} // handleSaveNote yerine handlePress
        />
      </View>
      {/* MAP */}
      {!loading ? (
        <ActivityIndicator />
      ) : (
        <View style={{flex: 1}}>
          <MapView
            onPress={e => setNewCoordinate(e.nativeEvent.coordinate)}
            style={styles.map}
            initialRegion={{
              latitude: note?.region?.latitude || 41.013891, // Varsayılan değer
              longitude: note?.region?.longitude || 28.972817, // Varsayılan değer
              latitudeDelta: 0.15,
              longitudeDelta: 0.13,
            }}
            provider={PROVIDER_GOOGLE}>
            {newCoordinate ? (
              <Marker coordinate={newCoordinate}></Marker>
            ) : (
              <Marker coordinate={note?.region}></Marker>
            )}
          </MapView>
        </View>
      )}
    </SafeAreaView>
  );
};

export default EditNote;
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
