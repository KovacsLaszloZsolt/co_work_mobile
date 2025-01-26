import '@/lib/i18n/init';
import { Stack } from 'expo-router';

import { jotaiStore } from '@/lib/jotaiStore';
import { Provider as JotaiProvider } from 'jotai';
import '../global.css';

export default function RootLayout() {
  return (
    <JotaiProvider store={jotaiStore}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </JotaiProvider>
  );
}
