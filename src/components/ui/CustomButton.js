import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {AppColor} from '../../theme/appColor';

const CustomButton = props => {
  const {title} = props;
  const {disabled} = props;
  return (
    <TouchableOpacity
      disabled={disabled}
      {...props}
      style={[
        styles.container,
        {backgroundColor: disabled ? 'lightgray' : AppColor.BLUE},
      ]}>
      <Text
        style={{
          color: AppColor.WHITE,
          fontSize: 20,
          fontWeight: '500',
          textAlign: 'center',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 10,
    alignItems: 'center',
    margin: 5,
    borderRadius: 10,
  },
});
