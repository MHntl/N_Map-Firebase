import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {AppColor} from '../../theme/appColor';
import {Edit, Trash} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import {EDITNOTE, NOTEDETAILS} from '../../utils/routes';
import firestore from '@react-native-firebase/firestore';

const NoteCard = ({item, handleDelete}) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        minHeight: 100,
        margin: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: AppColor.NOTE,
      }}>
      <View>
        <Pressable
          onPress={() => navigation.navigate(NOTEDETAILS, {item: item})}>
          <Text
            style={{fontSize: 18, fontWeight: '600', color: AppColor.WHITE}}>
            {item.title}
          </Text>
          <Text>{item.description}</Text>
          <Text style={{marginVertical: 10, color: AppColor.GRAY}}>
            {item.date}
          </Text>
        </Pressable>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate(EDITNOTE, {id: item.id})}
          style={{flex: 1, alignItems: 'flex-end'}}>
          <Edit color={AppColor.BLACK} />
        </TouchableOpacity>
        {handleDelete && (
          <TouchableOpacity
            onPress={() => handleDelete(item.id)}
            style={{flex: 1, alignItems: 'flex-end'}}>
            <Trash color={AppColor.BLACK} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default NoteCard;

const styles = StyleSheet.create({});
