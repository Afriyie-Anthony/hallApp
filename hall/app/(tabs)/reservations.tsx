import { View, Text, FlatList, TouchableOpacity, Modal, TextInput } from "react-native";
import React, { useState } from "react";
import { blocks, floors, rooms } from "../../constants/mockData";
import { SafeAreaView } from "react-native-safe-area-context";

// Define the Room interface
interface Room {
  id: string;
  blockId: string;
  floorId: string;
  name: string;
  capacity: number;
  occupied: number;
}

const RoomReservationsScreen = () => {
  const [selectedBlock, setSelectedBlock] = useState(null);
  const [selectedFloor, setSelectedFloor] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null); // Type selectedRoom

  const filteredRooms = rooms.filter((room: Room) => { // Explicitly type 'room'
    return (
      (!selectedBlock || room.blockId === selectedBlock.id) &&
      (!selectedFloor || room.floorId === selectedFloor.id)
    );
  });

  const handleRequestRoom = (room: Room) => { // Explicitly type 'room'
    setSelectedRoom(room);
    setIsModalVisible(true);
  };

  const confirmRequest = () => {
    alert(`Request submitted for ${selectedRoom?.name}! (Mock)`); // Use optional chaining
    setIsModalVisible(false);
    setSelectedRoom(null);
  };

  const renderRoomItem = ({ item }: { item: Room }) => ( // Explicitly type 'item'
    <View className="bg-white p-4 rounded-lg mb-4 flex-row justify-between items-center ">
      <View>
        <Text className="text-lg font-bold">{item.name}</Text>
        <Text className="text-gray-600">
          {blocks.find(b => b.id === item.blockId)?.name} -{" "}
          {floors.find(f => f.id === item.floorId)?.name}
        </Text>
        <Text className="text-gray-600">
          Occupancy: {item.occupied}/{item.capacity}
        </Text>
      </View>
      <TouchableOpacity
        className={`px-4 py-2 rounded-md ${item.occupied < item.capacity ? "bg-[#900633]" : "bg-gray-400"}`}
        onPress={() => handleRequestRoom(item)}
        disabled={item.occupied >= item.capacity}
      >
        <Text className="text-white font-semibold">
          {item.occupied < item.capacity ? "Request" : "Full"}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 px-4 pt-4 bg-gray-100">
      <Text className="text-3xl font-bold text-[#900633] mb-6 text-center">
        Room Reservations
      </Text>

      {/* Filters */}
      <View className="flex-col gap-5 justify-around mb-4">
        <View>
          <Text className="font-semibold mb-2">Block:</Text>
          <FlatList
            data={blocks}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                className={`px-4 py-2 rounded-md mr-2 ${selectedBlock?.id === item.id ? "bg-[#900633]" : "bg-gray-200"}`}
                onPress={() => setSelectedBlock(selectedBlock?.id === item.id ? null : item)}
              >
                <Text className={selectedBlock?.id === item.id ? "text-white" : "text-gray-800"}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
        <View>
          <Text className="font-semibold mb-2">Floor:</Text>
          <FlatList
            data={floors}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                className={`px-4 py-2 rounded-md mr-2 ${selectedFloor?.id === item.id ? "bg-[#900633]" : "bg-gray-200"}`}
                onPress={() => setSelectedFloor(selectedFloor?.id === item.id ? null : item)}
              >
                <Text className={selectedFloor?.id === item.id ? "text-white" : "text-gray-800"}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>

      {/* Room List */}
      <FlatList
        data={filteredRooms}
        keyExtractor={(item) => item.id}
        renderItem={renderRoomItem}
        ListEmptyComponent={
          <Text className="text-center text-gray-500 mt-10">
            No rooms found.
          </Text>
        }
      />

      {/* Request Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View className="flex-1 justify-center items-center bg-black/70">
          <View className="bg-white p-6 rounded-lg shadow-lg w-4/5">
            <Text className="text-xl font-bold mb-4">
              Confirm Room Request
            </Text>
            {selectedRoom && (
              <Text className="text-lg mb-6">
                Are you sure you want to request {selectedRoom.name}?
              </Text>
            )}
            <View className="flex-row justify-around">
              <TouchableOpacity
                className="bg-gray-300 px-5 py-2 rounded-md"
                onPress={() => setIsModalVisible(false)}
              >
                <Text className="text-gray-800 font-semibold">Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="bg-[#900633] px-5 py-2 rounded-md"
                onPress={confirmRequest}
              >
                <Text className="text-white font-semibold">Confirm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default RoomReservationsScreen;