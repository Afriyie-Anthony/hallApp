import { View, Text, FlatList, TouchableOpacity, Modal, TextInput } from "react-native";
import React, { useState } from "react";
import { requests, students, rooms } from "../../constants/mockData";
import { useRouter } from "expo-router"; // Import useRouter

const AdminDashboard = () => {
  const [allRequests, setAllRequests] = useState(requests);
  const [isAssignModalVisible, setIsAssignModalVisible] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [assignedRoomId, setAssignedRoomId] = useState("");
  const router = useRouter(); // Initialize useRouter

  const handleApprove = (requestId) => {
    setAllRequests(prevRequests =>
      prevRequests.map(req =>
        req.id === requestId ? { ...req, status: "approved" } : req
      )
    );
    alert(`Request ${requestId} Approved!`);
  };

  const handleReject = (requestId) => {
    setAllRequests(prevRequests =>
      prevRequests.map(req =>
        req.id === requestId ? { ...req, status: "rejected" } : req
      )
    );
    alert(`Request ${requestId} Rejected!`);
  };

  const handleAssignRoom = (request) => {
    setSelectedRequest(request);
    setIsAssignModalVisible(true);
  };

  const confirmAssignRoom = () => {
    if (!assignedRoomId) {
      alert("Please enter a Room ID.");
      return;
    }
    const roomExists = rooms.some(room => room.id === assignedRoomId);
    if (!roomExists) {
      alert("Invalid Room ID. Please enter an existing room ID.");
      return;
    }

    setAllRequests(prevRequests =>
      prevRequests.map(req =>
        req.id === selectedRequest.id
          ? { ...req, status: "allocated", assignedRoom: assignedRoomId }
          : req
      )
    );
    alert(`Request ${selectedRequest.id} assigned to Room ${assignedRoomId}!`);
    setIsAssignModalVisible(false);
    setSelectedRequest(null);
    setAssignedRoomId("");
  };

  const handleLogout = () => {
    alert("Admin Logged out successfully!");
    router.replace("/auth/login"); // Redirect to login screen
  };

  const renderRequestItem = ({ item }) => {
    const student = students.find(s => s.id === item.studentId);
    const assignedRoom = item.assignedRoom ? rooms.find(r => r.id === item.assignedRoom) : null;

    return (
      <View className="bg-white p-4 rounded-lg shadow-md mb-4 mt-">
        <Text className="text-lg font-bold">Request ID: {item.id}</Text>
        {student && <Text className="text-gray-700">Student: {student.name} ({student.indexNumber})</Text>}
        <Text className="text-gray-700">Requested Room: {item.roomId}</Text>
        <Text className="text-gray-700">Date: {item.date}</Text>
        <Text className="text-gray-700">Status: {item.status.charAt(0).toUpperCase() + item.status.slice(1)}</Text>
        {assignedRoom && (
          <Text className="text-gray-700">Assigned Room: {assignedRoom.name}</Text>
        )}

        <View className="flex-row justify-around mt-4">
          {item.status === "pending" && (
            <>
              <TouchableOpacity
                className="bg-green-500 px-4 py-2 rounded-md"
                onPress={() => handleApprove(item.id)}
              >
                <Text className="text-white font-semibold">Approve</Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="bg-red-500 px-4 py-2 rounded-md"
                onPress={() => handleReject(item.id)}
              >
                <Text className="text-white font-semibold">Reject</Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="bg-blue-500 px-4 py-2 rounded-md"
                onPress={() => handleAssignRoom(item)}
              >
                <Text className="text-white font-semibold">Assign Room</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
    );
  };

  return (
    <View className="flex-1 bg-gray-100 p-4">
      <View className="flex-row justify-between items-center mb-6">
        <Text className="text-3xl font-bold text-[#900633] text-center">
          Admin Dashboard
        </Text>
        <TouchableOpacity
          className="bg-red-500 px-4 py-2 rounded-lg"
          onPress={handleLogout}
        >
          <Text className="text-white font-semibold">Logout</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={allRequests}
        keyExtractor={(item) => item.id}
        renderItem={renderRequestItem}
        ListEmptyComponent={<Text className="text-center text-gray-500 mt-10">No requests found.</Text>}
      />

      {/* Assign Room Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isAssignModalVisible}
        onRequestClose={() => setIsAssignModalVisible(false)}
      >
        <View className="flex-1 justify-center items-center bg-black bg-opacity-50">
          <View className="bg-white p-6 rounded-lg shadow-lg w-4/5">
            <Text className="text-xl font-bold mb-4">
              Assign Room
            </Text>
            {selectedRequest && (
              <Text className="text-lg mb-4">
                Assign room for Request ID: {selectedRequest.id}
              </Text>
            )}
            <TextInput
              className="border border-gray-300 p-3 rounded-md w-full mb-4"
              placeholder="Enter Room ID (e.g., R101)"
              value={assignedRoomId}
              onChangeText={setAssignedRoomId}
            />
            <View className="flex-row justify-around">
              <TouchableOpacity
                className="bg-gray-300 px-5 py-2 rounded-md"
                onPress={() => setIsAssignModalVisible(false)}
              >
                <Text className="text-gray-800 font-semibold">Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="bg-blue-500 px-5 py-2 rounded-md"
                onPress={confirmAssignRoom}
              >
                <Text className="text-white font-semibold">Assign</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AdminDashboard;