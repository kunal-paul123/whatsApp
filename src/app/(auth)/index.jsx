import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Link, router } from "expo-router";
import imagePath from "../../constants/imagePath";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

const Auth = () => {
  const [isLoading, setIsLoading] = useState(false);

  let navigate_to_welcome = () => {
    router.push("/(auth)/terms_agree");
  };

  let loading_timeout = () => {
    setIsLoading(true);
    setTimeout(navigate_to_welcome, 3000);
  };

  useEffect(() => {
    const timeOut = setTimeout(loading_timeout, 2000);

    return () => {
      clearTimeout(timeOut);
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View></View>
      <View style={styles.body}>
        <Image
          source={imagePath.Logo}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.whatsApp_text}>WhatsApp</Text>
      </View>
      <View style={styles.footer}>
        {isLoading ? (
          <>
            <ActivityIndicator size={moderateScale(48)} color={"#0CC83"} />
            <Text style={styles.loading_text}>Loading...</Text>
          </>
        ) : (
          <>
            <Text style={styles.from_text}>From</Text>
            <Text style={styles.facebook_text}>Facebook</Text>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: verticalScale(50),
  },

  body: {
    alignItems: "center",
    gap: verticalScale(7),
  },
  footer: {
    alignItems: "center",
    height: verticalScale(60),
  },
  from_text: {
    fontSize: 15,
    color: "#867373",
  },
  facebook_text: {
    fontSize: 17,
    color: "#000",
  },
  logo: {
    height: verticalScale(80),
    width: scale(80),
  },
  whatsApp_text: {
    textAlign: "center",
    fontSize: moderateScale(30),
    fontWeight: "bold",
  },
  loading_text: {
    fontSize: moderateScale(15),
    fontWeight: "bold",
    marginTop: verticalScale(10),
  },
});

export default Auth;
