import {StyleSheet, TextInput, Text, View} from 'react-native';
import React from 'react';
import {AppColor} from '../../theme/appColor';

const CustomTextInput = ({value, defaultText, placeHolder, onChangeText}) => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          marginVertical: 5,
          fontSize: 18,
          fontWeight: '500',
          marginLeft: 3,
        }}>
        {placeHolder}
      </Text>
      <TextInput
        defaultValue={defaultText}
        onChangeText={onChangeText}
        placeHolder={placeHolder}
        style={{
          height: 40,
          width: '100%',
          padding: 10,
          borderWidth: 1,
          borderRadius: 10,
          backgroundColor: '#d2d2d2',
          borderColor: AppColor.GRAY,
        }}
      />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: AppColor.WHITE,
    padding: 5,
    margin: 5,
  },
});
