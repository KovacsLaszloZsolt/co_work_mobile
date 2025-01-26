import { tailwindCssColors } from '@/constants/tailwind';
import { Feather, Fontisto, Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const iconHeight = 28;
const textSizes = 10;

export default function TabLayout() {
  const { t } = useTranslation('translation', { keyPrefix: 'tabs' });
  const { bottom } = useSafeAreaInsets();

  console.log('bottom', bottom);
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: tailwindCssColors.blue[500],
        headerShown: false,
        tabBarStyle: {
          backgroundColor: tailwindCssColors.gray[700],
          borderTopEndRadius: 20,
          borderTopStartRadius: 20,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: t('map'),
          tabBarLabelStyle: {
            fontSize: textSizes,
          },
          tabBarIcon: ({ color }) => (
            <Fontisto size={iconHeight} name="map" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="list"
        options={{
          title: t('list'),
          tabBarLabelStyle: {
            fontSize: textSizes,
          },
          tabBarIcon: ({ color }) => (
            <Feather size={iconHeight} name="list" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="filter"
        options={{
          title: t('filter'),
          tabBarLabelStyle: {
            fontSize: textSizes,
          },
          tabBarIcon: ({ color }) => (
            <Feather size={iconHeight} name="filter" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: t('favorites'),
          tabBarLabelStyle: {
            fontSize: textSizes,
          },
          tabBarIcon: ({ color }) => (
            <Feather size={iconHeight} name="star" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: t('settings'),
          tabBarLabelStyle: {
            fontSize: textSizes,
          },
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings-outline" size={iconHeight} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
