import { View, Text, FlatList } from "react-native";
import React from "react";
import { requests, rooms } from "../../constants/mockData";
import { SafeAreaView } from "react-native-safe-area-context";

const ReservedRoomsScreen = () => {
  // Filter requests to only show those with 'approved' status and an assigned room
  const reservedRooms = requests.filter(
    (request) => request.status === "approved" && request.assignedRoom
  );

  const renderReservedRoomItem = ({ item }) => {
    const roomDetails = rooms.find((room) => room.id === item.assignedRoom);

    if (!roomDetails) {
      return null; // Should not happen if data is consistent
    }

    return (
      <View className="bg-white p-4 rounded-lg mb-4">
        <Text className="text-lg font-bold">{roomDetails.name}</Text>
        <Text className="text-gray-700">Request ID: {item.id}</Text>
        <Text className="text-gray-700">Date: {item.date}</Text>
        <Text className="text-gray-700">Status: {item.status.charAt(0).toUpperCase() + item.status.slice(1)}</Text>
        {/* Add more room details as needed */}
      </View>
    );
  };

  return (
    <SafeAreaView className="flex-1 p-4 bg-gray-100">
      <Text className="text-3xl font-bold text-[#900633] mb-6 text-center">
        My Reserved Rooms
      </Text>

      <FlatList
        data={reservedRooms}
        keyExtractor={(item) => item.id}
        renderItem={renderReservedRoomItem}
        ListEmptyComponent={
          <Text className="text-center text-gray-500 mt-10">
            You have no reserved rooms yet.
          </Text>
        }
      />
    </SafeAreaView>
  );
};

export default ReservedRoomsScreen;