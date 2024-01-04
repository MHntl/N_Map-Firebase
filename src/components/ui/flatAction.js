import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {AddCircle} from 'iconsax-react-native';
import {AppColor} from '../../theme/appColor';
import {SELECTCOORDINATE} from '../../utils/routes';

const FlatAction = props => {
  return (
    <TouchableOpacity
      onPress={() => props.navigation.navigate(SELECTCOORDINATE)}
      style={{
        opacity: 0.7,
        position: 'absolute',
        bottom: 30,
        right: 20,
        width: 75,
        height: 75,
        backgroundColor: AppColor.BLUE,
        borderRadius: 200,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <AddCircle size={30} color={AppColor.WHITE} />
    </TouchableOpacity>
  );
};

export default FlatAction;

const styles = StyleSheet.create({});
