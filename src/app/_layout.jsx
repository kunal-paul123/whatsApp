import { View, Text } from "react-native";
import React, { useState } from "react";
import { Redirect, Stack } from "expo-router";

const RootLayout = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      <Stack screenOptions={{ headerShown: false }} />
      {isLogin ? <Redirect href={"/(main)"} /> : <Redirect href={"/(auth)"} />}
    </>
  );
};

export default RootLayout;
