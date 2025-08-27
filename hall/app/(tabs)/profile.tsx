import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { students } from "../../constants/mockData";

const ProfileScreen = () => {
  const router = useRouter();
  // For demonstration, assuming the first student is logged in
  const student = students[0]; 

  if (!student) {
    return (
      <View className="flex-1 items-center justify-center bg-white px-4">
        <Text className="text-xl text-red-500">Student data not found.</Text>
      </View>
    );
  }

  const handleLogout = () => {
    alert("Logged out successfully!");
    router.replace("/auth/login"); // Redirect to login screen
  };

  return (
    <View className="flex-1 bg-white px-4 mt-10">
      <Text className="text-3xl font-bold text-[#900633] mb-6 text-center">
        My Profile
      </Text>

      <View className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
        <Text className="text-lg font-semibold mb-2">Name: {student.name}</Text>
        <Text className="text-lg font-semibold mb-2">Index Number: {student.indexNumber}</Text>
        <Text className="text-lg font-semibold mb-2">Email: {student.email}</Text>
        {/* Add more student details as needed */}
      </View>

      <TouchableOpacity
        className="bg-[#900633] px-6 py-3 rounded-lg mb-4"
        onPress={() => router.push("/(tabs)/reservations")}
      >
        <Text className="text-white text-lg font-semibold text-center">Make a Reservation</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="bg-gray-300 px-6 py-3 rounded-lg mb-4"
        onPress={() => router.push("/(tabs)/reserved-rooms")}
      >
        <Text className="text-gray-800 text-lg font-semibold text-center">My Requests</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="bg-red-500 px-6 py-3 rounded-lg"
        onPress={handleLogout}
      >
        <Text className="text-white text-lg font-semibold text-center">Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;