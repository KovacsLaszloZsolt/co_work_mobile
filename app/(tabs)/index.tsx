import AntDesign from '@expo/vector-icons/AntDesign';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';
import MapView, { LatLng, Marker } from 'react-native-maps';

export default function Index() {
  const { t } = useTranslation('translation', { keyPrefix: 'map' });
  const [markers, setMarkers] = useState<{ coordinate: LatLng }[]>([]);
  return (
    <View className="flex-1">
      <MapView
        style={styles.map}
        onPress={(e) => {
          const coordinate = e.nativeEvent.coordinate;

          setMarkers((prev) => [...prev, { coordinate }]);
        }}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker.coordinate}
            title="This is a title"
            description="This is a description"
          />
        ))}
      </MapView>
      <View className="absolute bottom-5 right-5">
        <AntDesign name="pluscircleo" size={40} color="black" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  },
});
