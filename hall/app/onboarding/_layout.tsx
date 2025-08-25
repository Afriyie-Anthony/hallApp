import { Stack } from "expo-router";

export default function OnboardingLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="welcome"  options={{ headerShown: false }}/>
      <Stack.Screen name="students-info" />
      <Stack.Screen name="admins-info" />
    </Stack>
  );
}
