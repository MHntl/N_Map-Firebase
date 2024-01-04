import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {AppColor} from '../../theme/appColor';

const MarkerCallout = ({marker}) => {
  return (
    <View>
      <Text style={{fontWeight: 'bold', fontSize: 16}}>{marker.title}</Text>
      <Text style={{marginVertical: 3}}>{marker.description}</Text>
      <TouchableOpacity
        style={{
          backgroundColor: AppColor.BLUE,
          alignSelf: 'center',
          padding: 5,
          borderRadius: 5,
        }}>
        <Text style={{color: '#fff', fontWeight: 'bold'}}>Detay</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MarkerCallout;

const styles = StyleSheet.create({});
