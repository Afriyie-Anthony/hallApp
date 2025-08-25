import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const WelcomeScreen = () => {
  const router = useRouter();

  return (
    <View className="flex-1 items-center justify-center bg-white p-4">
      <Image
        source={require("../../assets/images/logo.png")} // Assuming logo.png is the app logo
        className="w-40 h-40 mb-4"
      />
      <Text className="text-4xl font-bold text-[#900633] mb-8 text-center">
        Welcome to HallApp!
      </Text>
      <Text className="text-xl text-gray-700 mb-12 text-center">
        Manage your hostel easily.
      </Text>
      <TouchableOpacity
        className="bg-[#900633] px-8 py-4 rounded-lg"
        onPress={() => router.push("/onboarding/students-info")}
      >
        <Text className="text-white text-lg font-semibold">Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;
