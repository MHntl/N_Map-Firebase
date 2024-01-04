import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  ADDNOTE,
  EDITNOTE,
  HOME,
  NOTEDETAILS,
  NOTELIST,
  SELECTCOORDINATE,
} from '../utils/routes';
import Home from '../screens/home';
import NoteList from '../screens/note/noteList';
import AddNote from '../screens/note/addNote';
import EditNote from '../screens/note/editNote';
import NoteDetail from '../screens/note/noteDetail';
import SelectCoordinate from '../screens/maps/selectCoordinate';

const RootNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerBackTitle: 'Geri'}}>
      <Stack.Screen name={HOME} component={Home} />
      <Stack.Screen name={ADDNOTE} component={AddNote} />
      <Stack.Screen name={NOTELIST} component={NoteList} />
      <Stack.Screen name={EDITNOTE} component={EditNote} />
      <Stack.Screen name={NOTEDETAILS} component={NoteDetail} />
      <Stack.Screen name={SELECTCOORDINATE} component={SelectCoordinate} />
    </Stack.Navigator>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
