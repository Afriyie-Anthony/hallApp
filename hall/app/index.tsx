import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import { useRouter } from "expo-router";

const SplashScreen = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
            router.replace("/onboarding"); // Navigate to the onboarding screens
    }, 3000); // 3 seconds
  }, []);

  return (
    <View className="flex-1 items-center justify-center bg-[#900633]">
      <View className="w-52 h-52 mb-4 bg-white p-4 rounded-full items-center justify-center">
        <Image
        source={require("../assets/images/logo.png")} // Assuming logo.png is the app logo
        className="w-40 h-40 mb-4"
      />
      </View>
      <Text className="text-5xl font-bold text-white">HallApp</Text>
    </View>
  );
};

export default SplashScreen;