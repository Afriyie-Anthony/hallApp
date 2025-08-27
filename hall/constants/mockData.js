export const students = [
  {
    id: "1",
    name: "John Doe",
    indexNumber: "STU001",
    email: "john.doe@example.com",
    password: "password123",
  },
  {
    id: "2",
    name: "Jane Smith",
    indexNumber: "52214",
    email: "jane.smith@example.com",
    password: "password123",
  },
];

export const blocks = [
  { id: "B1", name: "Block A" },
  { id: "B2", name: "Block B" },
  { id: "B3", name: "Block C" },
  { id: "B4", name: "Block D" },
];

export const floors = [
  { id: "F1", name: "Ground Floor" },
  { id: "F2", name: "First Floor" },
  { id: "F3", name: "Second Floor" },
  { id: "F4", name: "Third Floor" },
];

export const rooms = [
  { id: "R101", blockId: "B1", floorId: "F1", name: "Room 101", capacity: 2, occupied: 1 },
  { id: "R102", blockId: "B1", floorId: "F1", name: "Room 102", capacity: 2, occupied: 2 }, // Full
  { id: "R103", blockId: "B1", floorId: "F2", name: "Room 103", capacity: 3, occupied: 0 }, // Empty
  { id: "R201", blockId: "B2", floorId: "F1", name: "Room 201", capacity: 1, occupied: 0 },
  { id: "R202", blockId: "B2", floorId: "F2", name: "Room 202", capacity: 2, occupied: 1 },
  { id: "R301", blockId: "B3", floorId: "F3", name: "Room 301", capacity: 3, occupied: 2 },
];

export const requests = [
  { id: "REQ001", studentId: "1", roomId: "R103", date: "2024-07-20", status: "pending" },
  { id: "REQ002", studentId: "2", roomId: "R201", date: "2024-07-18", status: "approved", assignedRoom: "R201" },
  { id: "REQ003", studentId: "1", roomId: "R102", date: "2024-07-15", status: "rejected" },
];
