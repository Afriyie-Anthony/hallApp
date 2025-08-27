import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <ScrollView className="flex-1 p-4">
        <Text className="text-4xl font-bold text-[#900633] mb-6 text-center mt-8">
          Welcome to HallApp!
        </Text>

        <View className="bg-white p-6 rounded-lg shadow-md mb-6">
          <Text className="text-2xl font-semibold mb-3">Your Campus Living Made Easy</Text>
          <Text className="text-gray-700 leading-relaxed">
            HallApp is designed to simplify your daily life on campus. From managing your room reservations to staying updated with hall announcements, we've got you covered.
          </Text>
        </View>

        <View className="bg-white p-6 rounded-lg shadow-md mb-6">
          <Text className="text-2xl font-semibold mb-3">Key Features</Text>
          <View className="mb-4">
            <Text className="text-lg font-medium text-[#900633]">Room Reservations</Text>
            <Text className="text-gray-700">Easily book and manage your room reservations for events, study sessions, or guest stays.</Text>
          </View>
          <View className="mb-4">
            <Text className="text-lg font-medium text-[#900633]">Reserved Rooms</Text>
            <Text className="text-gray-700">View a comprehensive list of all your confirmed room bookings and their details.</Text>
          </View>
          <View className="mb-4">
            <Text className="text-lg font-medium text-[#900633]">Profile Management</Text>
            <Text className="text-gray-700">Update your personal information and preferences securely.</Text>
          </View>
          <View>
            <Text className="text-lg font-medium text-[#900633]">Announcements & Events</Text>
            <Text className="text-gray-700">Stay informed with the latest news, events, and important announcements from your hall administration.</Text>
          </View>
        </View>

        <View className="bg-white p-6 rounded-lg shadow-md mb-6">
          <Text className="text-2xl font-semibold mb-3">Quick Actions</Text>
          <Link href="/(tabs)/reservations" asChild>
            <TouchableOpacity className="bg-[#900633] py-3 rounded-md mb-3">
              <Text className="text-white text-center text-lg font-semibold">Make a Reservation</Text>
            </TouchableOpacity>
          </Link>
          <Link href="/(tabs)/reserved-rooms" asChild>
            <TouchableOpacity className="bg-gray-700 py-3 rounded-md">
              <Text className="text-white text-center text-lg font-semibold">View My Reserved Rooms</Text>
            </TouchableOpacity>
          </Link>
        </View>

        <View className="h-20"></View> { /* Spacer for bottom content */ }
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;