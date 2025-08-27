import { View, Text, FlatList } from "react-native";
import React from "react";
import { requests, rooms } from "../../constants/mockData";

const RequestHistoryScreen = () => {
  const renderRequestItem = ({ item }) => {
    const assignedRoom = item.assignedRoom ? rooms.find(r => r.id === item.assignedRoom) : null;

    return (
      <View className="bg-white p-4 rounded-lg  mb-4">
        <Text className="text-lg font-bold">Request ID: {item.id}</Text>
        <Text className="text-gray-700">Date: {item.date}</Text>
        <Text className="text-gray-700">Status: {item.status.charAt(0).toUpperCase() + item.status.slice(1)}</Text>
        {assignedRoom && (
          <Text className="text-gray-700">Assigned Room: {assignedRoom.name}</Text>
        )}
      </View>
    );
  };

  return (
    <View className="flex-1  p-4 mt-10">
      <Text className="text-3xl font-bold text-[#900633] mb-6 text-center">
        My Request History
      </Text>

      <FlatList
        data={requests}
        keyExtractor={(item) => item.id}
        renderItem={renderRequestItem}
        ListEmptyComponent={<Text className="text-center text-gray-500 mt-10">No requests found.</Text>}
      />
    </View>
  );
};

export default RequestHistoryScreen;
