import { View, Text, TouchableOpacity, TextInput } from "react-native"; // Added TextInput
import React, { useState } from "react";
// Removed Input and Button imports
import { Link, useRouter } from "expo-router";

const Register = () => {
  const [name, setName] = useState("");
  const [indexNumber, setIndexNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRegister = () => {
    // Mock registration logic
    if (name && indexNumber && email && password) {
      alert("Registration Successful! Please login.");
      router.replace("/(tabs)"); // Redirect to home screen
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <View className="flex-1 items-center justify-center bg-white p-4">
      <Text className="text-4xl font-bold text-[#900633] mb-8">Register</Text>
      {/* Replaced Input with TextInput */}
      <TextInput
        className="w-full p-3 border border-gray-300 rounded-md mb-4"
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        className="w-full p-3 border border-gray-300 rounded-md mb-4"
        placeholder="Enter your index number"
        value={indexNumber}
        onChangeText={setIndexNumber}
        keyboardType="numeric" // Added keyboardType
      />
      <TextInput
        className="w-full p-3 border border-gray-300 rounded-md mb-4"
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address" // Added keyboardType
        autoCapitalize="none" // Added autoCapitalize
      />
      <TextInput
        className="w-full p-3 border border-gray-300 rounded-md mb-4"
        placeholder="Create a password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {/* Replaced Button with TouchableOpacity */}
      <TouchableOpacity
        className="w-full bg-[#900633] p-3 rounded-md mt-4 items-center"
        onPress={handleRegister}
      >
        <Text className="text-white text-lg font-semibold">Register</Text>
      </TouchableOpacity>
      <Link href="/auth/login" className="mt-4 text-[#900633] text-lg">
        Already have an account? Login
      </Link>
    </View>
  );
};

export default Register;