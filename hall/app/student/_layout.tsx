import { Stack } from "expo-router";

export default function StudentLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }} >
      <Stack.Screen name="profile" />
      <Stack.Screen name="room-booking" />
      <Stack.Screen name="payment-confirmation" />
      <Stack.Screen name="request-history" />
    </Stack>
  );
}
