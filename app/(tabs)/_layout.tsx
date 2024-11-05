import { FontAwesome, FontAwesome6, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { Tabs } from 'expo-router';
import { StyleSheet } from 'react-native';

import { colors } from '@/theme';

const TabLayout = () => {
  return (
    <>
      <Tabs
        initialRouteName="songs"
        screenOptions={{
          tabBarActiveTintColor: colors.primary,
          tabBarLabelStyle: { fontSize: 12, fontWeight: 700 },
          headerShown: false,
          tabBarStyle: {
            position: 'absolute',
            bottom: 24,
            left: 16,
            right: 16,
            borderRadius: 16,
            borderTopWidth: 0,
            ...styles.shadow,
          },
          tabBarItemStyle: { top: 12 },
          tabBarBackground: () => (
            <BlurView
              intensity={95}
              style={{
                ...StyleSheet.absoluteFillObject,
                overflow: 'hidden',
                borderRadius: 20,
              }}
            />
          ),
        }}>
        <Tabs.Screen
          name="favorites"
          options={{
            title: 'Favorites',
            tabBarIcon: ({ color }) => <FontAwesome name="heart" size={20} color={color} />,
          }}
        />
        <Tabs.Screen
          name="playlists"
          options={{
            title: 'Playlists',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="playlist-play" size={28} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="(songs)"
          options={{
            title: 'Songs',
            tabBarIcon: ({ color }) => (
              <Ionicons name="musical-notes-sharp" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="artists"
          options={{
            title: 'Artists',
            tabBarIcon: ({ color }) => <FontAwesome6 name="users-line" size={20} color={color} />,
          }}
        />
      </Tabs>
    </>
  );
};

export default TabLayout;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
