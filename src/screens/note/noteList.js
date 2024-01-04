import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import NoteCard from '../../components/notes/noteCard';
import FlatAction from '../../components/ui/flatAction';
import firestore from '@react-native-firebase/firestore';

const NoteList = params => {
  const {notes} = params.route.params;

  const handleDelete = id => {
    firestore()
      .collection('NOTES')
      .doc(id)
      .delete()
      .then(() => {
        console.log('MapData deleted!');
      });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <FlatList
          data={notes}
          keyExtractor={item => item?.id}
          renderItem={item => (
            <NoteCard item={item?.item} handleDelete={handleDelete} />
          )}
        />
        <FlatAction />
      </View>
    </SafeAreaView>
  );
};

export default NoteList;
