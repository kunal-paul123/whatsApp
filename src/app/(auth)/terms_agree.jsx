import { View, Text, SafeAreaView, StyleSheet, Image } from "react-native";
import React from "react";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import imagePath from "../../constants/imagePath";
import Button from "../../components/atoms/Button";
import { router } from "expo-router";

const Terms_agree = () => {
  const onAgree = () => {
    router.push("/(auth)/login");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcome_text}>Welcome to WhatsApp</Text>
        <Image
          source={imagePath.Logo}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.desc}>
          Read our Privacy Policy.Tap "Agree and Continue" to accept the Terms
          of Service
        </Text>
        <View style={{ width: moderateScale(280) }}>
          <Button title="Agree and Continue" onPress={onAgree} />
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.from_text}>From</Text>
        <Text style={styles.facebook_text}>Facebook</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    paddingVertical: verticalScale(75),
    alignItems: "center",
    paddingHorizontal: scale(30),
  },
  header: {
    gap: 24,
    alignItems: "center",
  },
  footer: {
    alignItems: "center",
  },
  from_text: {
    fontSize: 15,
    color: "#867373",
  },
  facebook_text: {
    fontSize: 17,
    color: "#000",
  },
  welcome_text: {
    fontSize: 25,
    fontWeight: 600,
  },
  logo: {
    height: verticalScale(200),
    width: scale(250),
  },
  desc: {
    textAlign: "center",
  },
});

export default Terms_agree;
