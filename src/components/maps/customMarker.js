import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Location} from 'iconsax-react-native';
import {AppColor} from '../../theme/appColor';

const CustomMarker = () => {
  return (
    <View style={{flex: 1}}>
      <Location size="32" color={AppColor.ORANGE} variant="Bold" />
    </View>
  );
};

export default CustomMarker;

const styles = StyleSheet.create({});
