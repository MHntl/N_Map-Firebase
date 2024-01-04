import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomTextInput from '../../components/ui/CustomTextInput';
import CustomButton from '../../components/ui/CustomButton';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';
import {HOME} from '../../utils/routes';
import {getNotes, resetData} from '../../utils/firebaseUtils';

const AddNote = ({route}) => {
  const navigation = useNavigation();
  const {coordinate, setAdded} = route.params;
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const date = new Date();

  const handleSaveNote = () => {
    const form = {
      date: date.toLocaleString(),
      title: title,
      description: description,
      region: coordinate,
    };
    firestore()
      .collection('NOTES')
      .add(form)
      .then(() => {
        console.log('Form added!');
      });
    navigation.navigate(HOME);
  };

  return (
    <View>
      <CustomTextInput
        placeHolder={'Başlık'}
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <CustomTextInput
        placeHolder={'Açıklama'}
        value={description}
        onChangeText={text => setDescription(text)}
      />
      <CustomButton
        disabled={title?.length <= 0 || description?.length <= 0}
        title={'Kaydet'}
        onPress={() => handleSaveNote()}
      />
    </View>
  );
};

export default AddNote;

const styles = StyleSheet.create({});
