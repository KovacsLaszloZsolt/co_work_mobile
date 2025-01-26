import { Stack } from 'expo-router';

export default function AddNewCoWorkLayout() {
  return (
    <Stack>
      <Stack.Screen name="addNewCoWork" options={{ headerShown: false }} />
    </Stack>
  );
}
