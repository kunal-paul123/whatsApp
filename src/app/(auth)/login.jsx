import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import Button from "../../components/atoms/Button";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import CountryPicker from "react-native-country-picker-modal";
import { endEvent } from "react-native/Libraries/Performance/Systrace";

const Login = () => {
  const [visible, setVisible] = useState(false);
  const [countryName, setCountryName] = useState("India");
  const [countryCode, setCountryCode] = useState("+91");

  const onNextButtonClick = () => {
    router.push("/(auth)/verify_otp");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.heading_container}>
          <Text style={styles.heading_text}>Enter Your Phone Number</Text>
          <Text style={styles.desc}>
            WhatsApp will need to verify your phone number.
            <Text style={styles.desc_link}> What's my number?</Text>
          </Text>
        </View>
        <View style={styles.input_main_container}>
          <TouchableOpacity
            onPress={() => setVisible(true)}
            style={styles.dropdown_container}
          >
            <View></View>
            <Text style={styles.dropdown_title}>{countryName}</Text>
            <AntDesign name="caretdown" size={15} color="black" />
          </TouchableOpacity>
          <View style={styles.horizontal_line}></View>
          <View style={styles.input_container}>
            <View style={styles.country_code}>
              <Text style={styles.country_code_text}>{countryCode}</Text>
              <View style={styles.horizontal_line}></View>
            </View>
            <View style={{ gap: verticalScale(10), flex: 1 }}>
              <TextInput
                placeholder="Enter your phone number"
                style={styles.input}
              />
              <View style={styles.horizontal_line}></View>
            </View>
          </View>
        </View>
      </View>
      <View>
        <Button
          title="Next"
          style={{ paddingHorizontal: 25 }}
          onPress={onNextButtonClick}
        />
      </View>
      {visible && (
        <CountryPicker
          visible={true}
          onClose={() => setVisible(false)}
          onSelect={(e) => {
            setCountryCode(`+${e.callingCode}`);
            setCountryName(e.name);
          }}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: verticalScale(70),
    alignItems: "center",
    justifyContent: "space-between",
  },
  header: {
    paddingHorizontal: scale(15),
    gap: 50,
  },
  heading_container: {
    gap: verticalScale(20),
  },
  input_main_container: {
    paddingHorizontal: scale(18),
  },
  heading_text: {
    fontSize: moderateScale(20),
    fontWeight: 600,
    textAlign: "center",
    color: "#000",
  },
  desc: {
    textAlign: "center",
    fontSize: moderateScale(13),
  },
  desc_link: {
    color: "#002AC0",
  },
  horizontal_line: {
    width: "100%",
    height: verticalScale(1),
    backgroundColor: "#05AA82",
  },
  dropdown_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: verticalScale(10),
  },
  dropdown_title: {
    fontSize: moderateScale(16),
    fontWeight: 600,
    color: "#000",
  },
  input_container: {
    flexDirection: "row",
    paddingVertical: verticalScale(5),
    alignItems: "center",
    gap: scale(20),
  },
  country_code: {
    gap: 15,
  },
  country_code_text: {
    fontSize: moderateScale(16),
    fontWeight: 500,
    color: "#000",
  },
  input: {
    fontSize: moderateScale(15),
  },
});

export default Login;
