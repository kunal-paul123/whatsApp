import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

const Button = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      activeOpacity={0.6}
      onPress={onPress}
    >
      <Text style={styles.button_text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#00A884",
    width: "100%",
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(15),
    borderRadius: moderateScale(4),
    alignItems: "center",
  },
  button_text: {
    color: "#fff",
    fontSize: moderateScale(14),
  },
});
